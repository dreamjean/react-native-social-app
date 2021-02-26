import { StatusBar } from "expo-status-bar";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import styled from "styled-components";

import { colors, images } from "../../config";
import { Image } from "../../styles";

const OnBoadingScreen = ({ navigation }) => {
  return (
    <Container>
      <Onboarding
        DotComponent={({ selected }) => <Dot {...{ selected }} />}
        onSkip={() => navigation.replace("SignIn")}
        onDone={() => navigation.navigate("SignIn")}
        pages={[
          {
            backgroundColor: colors.green,
            image: <Image boading source={images[1]} />,
            title: "Connect to the World",
            subtitle: "A New Way To Connect With The World",
          },
          {
            backgroundColor: colors.yellow,
            image: <Image boading source={images[2]} />,
            title: "Share Your Favorites",
            subtitle: "Share Your Thoughts With Similar Kind of People",
          },
          {
            backgroundColor: colors.pink,
            image: <Image boading source={images[3]} />,
            title: "Become The Star",
            subtitle: "Let The Spot Light Capture You",
          },
        ]}
      />

      <StatusBar style="dark" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Dot = styled.View`
  width: 6px;
  height: 6px;
  margin: 3px;

  ${({ selected, theme: { colors } }) => ({
    backgroundColor: selected ? colors.dark : colors.medium,
  })}
`;

export default OnBoadingScreen;
