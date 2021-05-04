import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { colors, constants } from "../../config";

const { ROW_HEIGHT } = constants;

const TextInput = forwardRef(({ iconName, error, touched, ...rest }, ref) => {
  return (
    <Container>
      <IconBox {...{ error, touched }}>
        <MaterialCommunityIcons
          name={iconName}
          size={30}
          color={!touched ? colors.grey2 : error ? colors.danger : colors.blue}
        />
      </IconBox>
      <Input
        {...{ ref }}
        {...rest}
        {...{ error, touched }}
        numberOfLines={1}
        selectionColor={colors.grey2}
        placeholderTextcolor={colors.grey2}
      />
    </Container>
  );
});

const Container = styled.View`
  flex-direction: row;
  height: ${ROW_HEIGHT}px;
  align-items: center;

  ${({ theme: { space } }) => ({
    marginVertical: space.s2,
  })}
`;

const IconBox = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  flex: 1;
  border-bottom-width: 1px;

  ${({ touched, error, theme: { colors, fonts, size, space } }) => ({
    borderBottomColor: !touched
      ? colors.grey
      : error
      ? colors.danger
      : colors.blue,
    fontFamily: fonts[4],
    fontSize: size.m1,
    color: colors.text,
    padding: space.s2,
  })}
`;

export default TextInput;
