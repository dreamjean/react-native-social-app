import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";

import { Text } from "../styles";

const SignInScreen = () => {
  return (
    <Container>
      <RightCircle />
      <LeftCircle />
      <Main>
        <Text>Wellcome back.</Text>
      </Main>

      <StatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Main = styled.View``;

// const HeaderGraphic = styled.View`
//   position: absolute;
//   width: 100%;
//   top: -50px;
//   z-index: -1;
// `;

const LeftCircle = styled.View`
  position: absolute;
  border-radius: 100px;
  width: 200px;
  height: 200px;
  left: -50px;
  top: -50px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.blue,
  })}
`;

const RightCircle = styled.View`
  position: absolute;
  border-radius: 200px;
  width: 400px;
  height: 400px;
  right: -100px;
  top: -200px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.violet,
  })}
`;

export default SignInScreen;
