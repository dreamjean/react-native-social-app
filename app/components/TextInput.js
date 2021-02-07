import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";

import { colors } from "../config";

const TextInput = ({ title, error, touched, ...rest }) => {
  return (
    <Container {...{ error, touched }}>
      <Title {...{ error, touched }}>{title}</Title>
      <Input {...rest} selectionColor={colors.blue} />
    </Container>
  );
};

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

const Title = styled.Text`
  ${({ error, touched, theme: { colors, getFont, size } }) => ({
    fontFamily: getFont(2),
    fontSize: size.s2,
    color: !touched ? colors.text2 : error ? colors.danger : colors.blue,
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
