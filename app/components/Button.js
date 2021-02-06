import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Text } from "../styles";

const Button = ({ title, margin, marginTop, onPress }) => {
  return (
    <Touchable {...{ margin, marginTop, onPress }}>
      <Text button1>{title}</Text>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 48px;

  ${({ marginTop, margin, theme: { colors, radii } }) => ({
    backgroundColor: colors.violet,
    borderRadius: radii.s1,
    marginTop,
    margin,
  })}
`;

export default Button;
