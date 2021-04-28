import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";

const Icon = ({
  backgroundColor,
  color = "white",
  name,
  IconComponent = MaterialCommunityIcons,
  iconRatio = 0.7,
  margin,
  onPress,
  size,
  style,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
          backgroundColor: pressed ? colors.green : backgroundColor,
          borderRadius: size / 2,
          width: size,
          height: size,
          margin,
        },
        style,
      ]}
      {...{ onPress }}
    >
      <Container {...{ size }}>
        <IconComponent name={name} color={color} size={size * iconRatio} />
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);

  ${({ size }) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
  })}
`;

export default Icon;
