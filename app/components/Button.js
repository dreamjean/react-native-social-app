import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { calender, colors } from "../config";
import { Text } from "../styles";

const { ROW_HEIGHT } = calender;

const Button = ({
  backgroundColor = colors.blue,
  color = colors.white,
  title,
  margin,
  onPress,
  loading = false,
}) => {
  return (
    <Touchable {...{ backgroundColor, margin, onPress }} disable={loading}>
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

  ${({ backgroundColor, margin, theme: { space, radii } }) => ({
    backgroundColor,
    borderRadius: radii.s1,
    marginTop: space.s2,
    margin,
  })}
`;

export default Button;
