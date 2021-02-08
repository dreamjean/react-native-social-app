import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { Text } from "../../styles";

const TextButton = ({ caption, title, marginTop, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        marginTop,
      })}
      {...{ onPress }}
    >
      <Text button2 center>
        {caption} <Cover>{title}</Cover>
      </Text>
    </Pressable>
  );
};

const Cover = styled(Text)`
  ${({ theme: { colors, getFont } }) => ({
    color: colors.violet,
    fontFamily: getFont(0),
  })}
`;

export default TextButton;
