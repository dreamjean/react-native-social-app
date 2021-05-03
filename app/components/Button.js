import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors, constants } from "../config";
import { Text } from "../styles";

const { ROW_HEIGHT } = constants;

const Button = ({
  bgColor = colors.transparent,
  borderColor,
  color = colors.blue,
  disabled,
  title,
  margin,
  width = 100,
  onPress,
}) => {
  return (
    <Pressable
      {...{ disabled, onPress }}
      style={({ pressed }) => ({
        borderRadius: 5,
        opacity: pressed ? 0.5 : 1,
        overflow: "hidden",
        height: ROW_HEIGHT,
        marginTop: 10,
        margin,
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Container {...{ bgColor, borderColor, width }}>
        <Text button1 {...{ color }}>
          {title}
        </Text>
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;

  ${({ bgColor, borderColor, width, theme: { radii } }) => ({
    backgroundColor: bgColor,
    borderColor,
    borderRadius: radii.s1,
    borderWidth: borderColor ? 2 : 0,
    height: borderColor ? "85%" : "100%",
    width,
  })}
`;

export default Button;
