import { AntDesign } from "@expo/vector-icons";
import { forwardRef } from "react";
import styled from "styled-components/native";

import { colors, constants } from "../config";

const { ROW_HEIGHT } = constants;

const TextInput = forwardRef(({ iconName, error, touched, ...rest }, ref) => {
  return (
    <Container {...{ error, touched }}>
      <IconBox {...{ error, touched }}>
        <AntDesign
          name={iconName}
          size={25}
          color={!touched ? colors.grey2 : error ? colors.danger : colors.blue}
        />
      </IconBox>
      <Input
        {...{ ref }}
        {...rest}
        numberOfLines={1}
        selectionColor={colors.grey2}
        placeholderTextcolor={colors.grey2}
      />
    </Container>
  );
});

const Container = styled.View`
  flex-direction: row;
  border-width: 1px;
  height: ${ROW_HEIGHT}px;
  align-items: center;

  ${({ error, touched, theme: { colors, space, radii } }) => ({
    borderColor: !touched ? colors.grey : error ? colors.danger : colors.blue,
    borderRadius: radii.s1,
    marginVertical: space.s2,
  })}
`;

const IconBox = styled.View`
  width: 50px;
  height: 100%;
  border-right-width: 1px;
  justify-content: center;
  align-items: center;

  ${({ error, touched, theme: { colors, space } }) => ({
    borderRightColor: !touched
      ? colors.grey
      : error
      ? colors.danger
      : colors.blue,
    padding: space.s2,
  })}
`;

const Input = styled.TextInput`
  flex: 1;

  ${({ theme: { colors, fonts, size, space } }) => ({
    fontFamily: fonts[4],
    fontSize: size.m1,
    color: colors.text,
    padding: space.s2,
  })}
`;

export default TextInput;
