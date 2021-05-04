import { Feather } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Platform } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import styled from "styled-components";

import AuthContext from "../auth/authContext";
import {
  Button,
  DraftModal,
  Icon,
  ImageInputList,
  UploadModal,
} from "../components";
import { colors } from "../config";
import { auth, db, firebase } from "../firebase";
import routes from "../navigation/routes";
import { Image } from "../styles";

const PostScreen = ({ navigation, route }) => {
  const data = route?.params?.data;
  const initialImages = data ? data : [];
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState(initialImages);
  const [modalVisible, setModalVisible] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadState, SetUploadState] = useState("uploading");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (data) setImages(data);
  }, [data]);

  useEffect(() => {
    requestCameraPermission();
  }, [hasCameraPermission]);

  const requestCameraPermission = useCallback(async () => {
    const { status } = await Camera.requestPermissionsAsync();

    setHasCameraPermission(status === "granted");
  }, []);

  const resetPost = () => {
    setCaption("");
    setImages([]);
  };

  const cancelPost = () => {
    if (caption === "" && images.length === 0) return navigation.goBack();

    setModalVisible(true);
  };

  const takePhotoFromCamera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled) {
        const image = { uri: result.uri };

        if (images.length === 4) {
          images.pop();
          setImages([image, ...images]);
        } else {
          setImages((prev) => [image, ...prev]);
        }
      }
    } catch (error) {
      console.log("Error @pickImage", error);
    }
  };

  const uploadImages = async () => {
    if (!images.length) savePost();

    const imagesBlob = [];
    setUploadVisible(true);
    setProgress(0);

    try {
      await Promise.all(
        images.map(async (image, index) => {
          const { uid } = auth.currentUser;
          const childPath = `post/${uid}/${Math.random().toString(36)}`;

          const response = await fetch(image.uri);
          const blob = await response.blob();

          const task = firebase.storage().ref().child(childPath).put(blob);

          const taskProgress = (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress / 100);
          };

          const taskError = (error) => console.log(error);

          const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((url) => {
              imagesBlob.push({ uri: url });
              // setUploadVisible(false);
              if (index === images.length - 1) {
                SetUploadState("done");
                savePost(imagesBlob);
              }
            });
          };

          task.on("state_changed", taskProgress, taskError, taskCompleted);
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const savePost = async (imagesBlob) => {
    if (!imagesBlob) setUploadVisible(true);
    try {
      db.collection("posts")
        .add({
          userId: user.uid,
          caption,
          images: imagesBlob ? [...imagesBlob] : null,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          likes: null,
          comments: null,
        })
        .then(() => {
          setUploadVisible(false);
          resetPost();

          navigation.navigate("Home");
        });
    } catch (error) {
      console.error("Error adding document: ", error.message);
    }
  };

  return (
    <Container>
      <UploadModal
        visible={uploadVisible}
        progress={progress}
        onDone={() => setUploadVisible(false)}
        uploadState={uploadState}
      />
      <Header>
        <Icon
          name="close-outline"
          size={35}
          color={colors.medium}
          style={{ top: 20, left: 15 }}
          backgroundColor={colors.transparent}
          onPress={cancelPost}
        />
        <Button
          title="Post"
          color={caption === "" && !images.length ? colors.medium : colors.blue}
          borderColor={colors.transparent}
          disabled={caption === "" && !images.length}
          width={80}
          onPress={uploadImages}
        />
      </Header>
      <Wrapper>
        <InputWrapper>
          <Image avatar source={{ uri: user.userImg }} />
          <Input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            dataDetectorTypes="link"
            importantForAutofill="auto"
            multiline
            maxLength={200}
            numberOfLines={4}
            onChangeText={(text) => setCaption(text)}
            placeholder="Want to share something..."
            textAlign="left"
            values={caption}
          />
        </InputWrapper>
        <>
          <ImageInputList
            images={images}
            onRemoveImage={(uri) =>
              setImages(images.filter((img) => img.uri !== uri))
            }
          />
          <Toolbar>
            <Icon
              name="camera"
              size={40}
              color={colors.blue}
              IconComponent={Feather}
              onPress={takePhotoFromCamera}
            />
            <Icon
              name="image"
              size={40}
              color={colors.blue}
              IconComponent={Feather}
              onPress={() => navigation.navigate(routes.MEDIA_SELECTION)}
            />
          </Toolbar>
        </>
      </Wrapper>
      {Platform.OS === "ios" && <KeyboardSpacer />}
      <DraftModal
        visible={modalVisible}
        onSave={() => {
          setModalVisible(false);
          navigation.goBack();
        }}
        onUnsave={() => {
          resetPost();
          setModalVisible(false);
          navigation.goBack();
        }}
        onCloseModal={() => setModalVisible(false)}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.grey,
    paddingTop: space.m1,
  })}
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

const InputWrapper = styled.View`
  flex: 1;
  flex-direction: row;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

const Input = styled.TextInput`
  flex: 1;
  align-self: flex-start;
  padding: 0;

  ${({ theme: { size, fonts, colors, space } }) => ({
    fontSize: size.m1,
    fontFamily: fonts[4],
    color: colors.dark,
    marginLeft: space.s3,
    marginTop: space.s2,
    textAlignVertical: "top",
  })}
`;

const Toolbar = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    padding: space.s1,
  })}
`;

export default PostScreen;
