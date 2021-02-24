import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";

import AuthContext from "../auth/authContext";
import { Text } from "../styles";

const LoadingScreen = () => {
  const animation = useRef();
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    animation.current.play();

    setTimeout(async () => {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }, 500);
  }, []);

  return (
    <Container>
      <Text heading white>
        Social App
      </Text>

      <LottieView
        ref={animation}
        autoPLay
        loop
        style={{ width: 400, height: 400 }}
        source={require("../assets/animations/simple-loading.json")}
      />
      <StatusBar style="light" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.dark,
  })};
`;

export default LoadingScreen;
