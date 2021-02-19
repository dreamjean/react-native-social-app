import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styled from "styled-components";

import { Text } from "../../styles";

const Container = ({ title, signUP, children }) => {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <Wrapper>
        <HeaderGraphic>
          <RightCircle />
          <LeftCircle />
        </HeaderGraphic>
        <Text heading center marginTop={180}>
          {title}
        </Text>
        <Auth {...{ signUP }}>{children}</Auth>
      </Wrapper>
      <StatusBar style="light" />
    </KeyboardAwareScrollView>
  );
};

const Wrapper = styled.View`
  flex: 1;
`;

const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -1;
`;

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

const Auth = styled.View`
  justify-content: center;

  ${({ signUP, theme: { space } }) => ({
    padding: space.m1,
    marginTop: signUP ? -space.s2 : space.s2,
  })}
`;

export default Container;
