import React, { forwardRef } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";

import { colors } from "../config";
import { Text } from "../styles";

const TextInput = forwardRef(({ title, error, touched, ...rest }, ref) => {
  return (
    <Container {...{ error, touched }}>
      <Text inputTitle {...{ error, touched }}>
        {title}
      </Text>
      <Input {...{ ref }} {...rest} selectionColor={colors.blue} />
    </Container>
  );
});

const Container = styled.View`
  ${({ error, touched, theme: { colors, space } }) => ({
    borderBottomColor: !touched
      ? colors.text2
      : error
      ? colors.danger
      : colors.blue,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: space.s2,
  })}
`;

const Input = styled.TextInput`
  height: 48px;

  ${({ theme: { colors, getFont, size } }) => ({
    fontFamily: getFont(0),
    fontSize: size.m1,
    color: colors.text,
  })}
`;

export default TextInput;
