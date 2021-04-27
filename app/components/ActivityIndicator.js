import LottieView from "lottie-react-native";
import React from "react";
import styled from "styled-components";

const ActivityIndicator = () => {
  return (
    <Container>
      <LottieView
        autoPlay
        loop
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
