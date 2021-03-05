import LottieView from "lottie-react-native";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ActivityIndicator = () => {
  const animation = useRef();
  useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <Container>
      <LottieView
        ref={animation}
        source={require("../assets/animations/690-loading.json")}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

export default ActivityIndicator;
