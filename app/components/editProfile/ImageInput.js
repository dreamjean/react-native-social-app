import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect } from "react";
import { Platform, Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";
import { Image } from "../styles";

const ImageInput = ({ image, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    if (Platform.OS !== "web") {
      const {
        granted,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!granted)
        alert("You need to enable permission to access the library.");
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      console.log(result);
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error @pickImage", error);
    }
  };

  return (
    <Pressable
      style={({ pressed }) => ({
        background: pressed ? colors.lightBlue : colors.lightBlue2,
        alignItems: "center",
        justifyContent: "center",
      })}
      onPress={selectImage}
    >
      <Container>
        {image && <Image source={{ uri: image }} />}

        <MaterialCommunityIcons
          name="camera-plus-outline"
          size={40}
          color={colors.white}
          style={{ position: "absolute" }}
        />
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  width: 100px;
  height: 100px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ${({ theme: { colors, space, radii } }) => ({
    borderRadius: radii.m2,
    backgroundColor: colors.lightBlue2,
    marginBottom: space.s1,
  })}
`;

export default ImageInput;
