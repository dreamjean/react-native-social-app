import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import styled from "styled-components";

import { Button, DraftModal, Icon, ImageInputList } from "../components";
import { colors, constants, images } from "../config";
import { db, firebase } from "../firebase";
import { Image } from "../styles";

const { KEYBOARD_HEIGHT } = constants;

const PostScreen = ({ navigation, route }) => {
  const data = route?.params?.data;
  const initialImages = data ? data : [];
  const [postText, setPostText] = useState("");
  const [selectedImages, setSelectedImages] = useState(initialImages);
  // const [docRefId, setDocRefId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data) setSelectedImages(data);
  }, [data]);

  const resetPost = () => {
    setPostText("");
    setSelectedImages([]);
  };

  const cancelPost = () => {
    if (postText === "" && selectedImages.length === 0) navigation.goBack();
    else setModalVisible(true);
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
          color={colors.grey2}
          style={{ marginLeft: 8, marginTop: 18 }}
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
      <InputWrapper>
        <Image avatar source={images[4]} />
        <Input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          placeholder="Want to share something..."
          multiline
          numberOfLines={4}
          values={postText}
          onChangeText={(text) => setPostText(text)}
        />
      </InputWrapper>
      <ImagesWrapper>
        <ImageInputList
          images={selectedImages}
          onRemoveImage={(uri) =>
            setSelectedImages(selectedImages.filter((img) => img.uri !== uri))
          }
        />
      </ImagesWrapper>
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
  ${({ theme: { size, fonts, colors, space } }) => ({
    fontSize: size.m1,
    fontFamily: fonts[4],
    color: colors.dark,
    marginLeft: space.s3,
  })}
`;

const ImagesWrapper = styled.View`
  position: absolute;
  bottom: ${KEYBOARD_HEIGHT}px;
  left: 20px;
`;

export default PostScreen;
