import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import routes from "../../navigation/routes";
import { Image } from "../../styles";

const ImageInput = ({ error, imageUri, onRemoveImage }) => {
  const navigation = useNavigation();

  return (
    <Container {...{ error }}>
      {imageUri && (
        <>
          <Image source={{ uri: imageUri }} />
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
              position: "absolute",
              top: 6,
              right: 6,
            })}
            onPress={onRemoveImage}
          >
            <MaterialCommunityIcons
              name="close-circle"
              size={20}
              color={colors.white}
            />
          </Pressable>
        </>
      )}
      {!imageUri && (
        <Pressable
          style={({ pressed }) => ({
            backgroundColor: pressed ? colors.lightCyan1 : "transparent",
            width: "100%",
            height: "100%",
            opacity: pressed ? 0.5 : 1,
            alignItems: "center",
            justifyContent: "center",
          })}
          onPress={() => navigation.navigate(routes.MEDIA_SELECTION)}
        >
          <MaterialCommunityIcons
            name="camera-plus"
            size={38}
            color={colors.grey}
          />
        </Pressable>
      )}
    </Container>
  );
};

const Container = styled.View`
  overflow: hidden;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  ${({ theme: { colors, space, radii } }) => ({
    borderRadius: radii.s2,
    background: colors.light,
    marginVertical: space.s3,
    marginRight: space.s3,
  })}
`;

export default ImageInput;
