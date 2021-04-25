import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors, constants } from "../config";
import { Text } from "../styles";

const { ROW_HEIGHT } = constants;

const Button = ({
  backgroundColor = colors.blue,
  color = colors.white,
  title,
  margin,
  padding,
  onPress,
  loading = false,
}) => {
  return (
    <Touchable
      {...{ backgroundColor, margin, padding, onPress }}
      disable={loading}
    >
      <Text button1 {...{ color }}>
        {title}
      </Text>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: ${ROW_HEIGHT}px;

  ${({ backgroundColor, margin, padding, theme: { space, radii } }) => ({
    backgroundColor,
    borderRadius: radii.s1,
    marginTop: space.s2,
    padding,
    margin,
  })}
`;

export default Button;
