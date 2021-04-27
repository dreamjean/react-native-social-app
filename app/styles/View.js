import { StyleSheet } from "react-native";
import styled, { css } from "styled-components";

const separatorStyle = css`
  height: ${StyleSheet.hairlineWidth}px;
  align-self: flex-end;

  ${({ width, theme: { colors, space } }) => ({
    backgroundColor: colors.grey2,
    marginVertical: space.s1,
    width,
    opacity: 0.35,
  })}
`;

const View = styled.View`
  ${({ separator }) => separator && separatorStyle}
`;

export default View;
