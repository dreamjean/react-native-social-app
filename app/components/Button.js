import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { Text } from "../styles";

const Button = ({ title, margin, marginTop, onPress, loading = false }) => {
  return (
    <Touchable {...{ margin, marginTop, onPress }} disable={loading}>
      {loading ? <Loading /> : <Text button1>{title}</Text>}
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

const Loading = styled.ActivityIndicator.attrs(({ theme: { colors } }) => ({
  color: colors.white,
  size: "small",
}))``;

export default Button;
