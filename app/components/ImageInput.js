import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";
import { Image } from "../styles";

const ImageInput = ({ error, image }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={({ pressed }) => ({
        background: pressed ? colors.lightBlue : colors.grey,
        alignItems: "center",
        justifyContent: "center",
      })}
      onPress={() => navigation.navigate("MediaSelection")}
    >
      <Container {...{ error }}>
        {image ? (
          <Image source={{ uri: image }} />
        ) : (
          <MaterialCommunityIcons
            name="camera-plus"
            size={35}
            color={error ? colors.danger : colors.grey}
          />
        )}
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  width: 80px;
  height: 80px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  ${({ error, theme: { colors, space, radii } }) => ({
    borderRadius: radii.l,
    backgroundColor: error ? colors.lightDanger : colors.grey,
    margin: space.s3,
  })}
`;

export default ImageInput;
