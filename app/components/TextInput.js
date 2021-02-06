import React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";

import { colors } from "../config";

const TextInput = ({ title, error, ...rest }) => {
  return (
    <>
      <Title {...{ error }}>{title}</Title>
      <Input {...rest} selectionColor={colors.blue} />
    </>
  );
};

const Title = styled.Text`
  ${({ error, theme: { colors, getFont, size, space } }) => ({
    fontFamily: getFont(2),
    fontSize: size.s2,
    color: error ? colors.error : colors.text2,
    marginTop: space.m1,
  })}
`;

const Input = styled.TextInput`
  height: 48px;

  ${({ theme: { colors, getFont, size } }) => ({
    borderBottomColor: colors.text,
    borderBottomWidth: StyleSheet.hairlineWidth,
    fontFamily: getFont(0),
    fontSize: size.m1,
    color: colors.text,
  })}
`;

export default TextInput;
