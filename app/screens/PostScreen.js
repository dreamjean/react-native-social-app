import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import React, { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import styled from "styled-components";

import { Button, DraftModal, Icon, ImageInputList } from "../components";
import { colors, images } from "../config";
import { db, firebase } from "../firebase";
import { Image } from "../styles";

const PostScreen = ({ navigation, route }) => {
  const data = route?.params?.data;
  const initialImages = data ? data : [];
  const [postText, setPostText] = useState("");
  const [selectedImages, setSelectedImages] = useState(initialImages);
  // const [docRefId, setDocRefId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);

  useEffect(() => {
    if (data) setSelectedImages((prev) => [...data, ...prev]);
  }, [data]);

  useEffect(() => {
    requestCameraPermission();
  }, [hasCameraPermission]);

  const requestCameraPermission = useCallback(async () => {
    const { status } = await Camera.requestPermissionsAsync();

    setHasCameraPermission(status === "granted");
  }, []);

  const resetPost = () => {
    setPostText("");
    setSelectedImages([]);
  };

  const cancelPost = () => {
    if (postText === "" && selectedImages.length === 0) navigation.goBack();
    else setModalVisible(true);
  };

  const takePhotoFromCamera = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });

      if (!result.cancelled && result.uri)
        setSelectedImages((prev) => [{ uri: result.uri }, ...prev]);
    } catch (error) {
      console.log("Error @pickImage", error);
    }
  };

  const handleSubmit = async () => {
    if (!postText || !selectedImages.length) {
      alert("There is nothing to post.");
      return;
    }

    try {
      const { uid } = firebase.auth().currentUser;

      db.collection("tweets")
        .add({
          userId: uid,
          text: postText,
          images: [...selectedImages],
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          likes: null,
          comments: null,
        })
        .then(() => {
          // setDocRefId(docRef.id);

          Alert.alert(
            "Post published!",
            "Your post has been published Successfully!"
          );

          navigation.navigate("Home");
        });
    } catch (error) {
      console.error("Error adding document: ", error.message);
    }
  };

  return (
    <Container>
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
          color={colors.blue}
          borderColor={colors.transparent}
          width={80}
          onPress={handleSubmit}
        />
      </Header>
      <Wrapper>
        <InputWrapper>
          <Image avatar source={images[4]} />
          <Input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
            dataDetectorTypes="link"
            importantForAutofill="auto"
            multiline
            maxLength={200}
            numberOfLines={4}
            onChangeText={(text) => setPostText(text)}
            placeholder="Want to share something..."
            textAlign="left"
            values={postText}
          />
        </InputWrapper>
        <>
          <ImageInputList
            images={selectedImages}
            onRemoveImage={(uri) =>
              setSelectedImages(selectedImages.filter((img) => img.uri !== uri))
            }
          />
          <Toolbar>
            <Icon
              name="camera-outline"
              size={40}
              color={colors.blue}
              onPress={takePhotoFromCamera}
            />
          </Toolbar>
        </>
      </Wrapper>
      <KeyboardSpacer />
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
  line-height: 26px;
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
