import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components";

import { Button, TextButton } from "../components";
import TextInput from "../components/TextInput";
import { Text } from "../styles";

const SignInScreen = ({ navigation }) => {
  return (
    <Container>
      <HeaderGraphic>
        <RightCircle />
        <LeftCircle />
      </HeaderGraphic>
      <Text heading center marginTop={193}>
        Wellcome back.
      </Text>
      <Auth>
        <TextInput
          title="Email Address"
          autoCapitalize="none"
          autoComplateType="email"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <TextInput
          title="password"
          autoCapitalize="none"
          autoComplateType="password"
          autoCorrect={false}
          keyboardType="default"
          secureTextEntry
        />
        <Button title="Login" marginTop={64} />
      </Auth>
      <TextButton
        caption="New to SocialApp?"
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
      <StatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
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
  ${({ theme: { space } }) => ({
    padding: space.m1,
    marginTop: space.m1,
  })}
`;

export default SignInScreen;
