import React from "react";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components";

import { colors, constants } from "../config";
import { Text } from "../styles";

const { ROW_HEIGHT } = constants;

const Button = ({
  bgColor = colors.transparent,
  borderColor = colors.blue,
  color = colors.blue,
  title,
  margin,
  width = 100,
  onPress,
}) => {
  return (
    <Touchable {...{ margin, onPress }}>
      <Container {...{ bgColor, borderColor, width }}>
        <Text button1 {...{ color }}>
          {title}
        </Text>
      </Container>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  height: ${ROW_HEIGHT}px;
  overflow: hidden;

  ${({ margin, theme: { space, radii } }) => ({
    borderRadius: radii.s1,
    marginTop: space.s2,
    margin,
  })}
`;

const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({ bgColor, borderColor, width }) => ({
    backgroundColor: bgColor,
    borderColor,
    borderWidth: borderColor ? 2 : 0,
    width,
  })}
`;

export default Button;
