import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import styled from "styled-components";

import { colors, images } from "../../config";
import { Image, Text } from "../../styles";

const OnBoardingScreen = ({ navigation }) => {
  const onDone = ({ ...props }) => (
    <Pressable
      style={({ pressed }) => ({
        padding: 10,
        opacity: pressed ? 0.5 : 1,
        backgroundColor: pressed ? colors.light : colors.lightWhite,
        borderRadius: 8,
        marginRight: 5,
      })}
      {...props}
    >
      <DoneText button1>Done</DoneText>
    </Pressable>
  );

  return (
    <Container>
      <Onboarding
        DoneButtonComponent={onDone}
        DotComponent={({ selected }) => <Dot {...{ selected }} />}
        onSkip={() => navigation.replace("SignIn")}
        onDone={() => navigation.navigate("SignIn")}
        pages={[
          {
            backgroundColor: colors.green,
            image: <Image boarding source={images[1]} />,
            title: "Connect to the World",
            subtitle: "A New Way To Connect With The World",
          },
          {
            backgroundColor: colors.yellow,
            image: <Image boarding source={images[2]} />,
            title: "Share Your Favorites",
            subtitle: "Share Your Thoughts With Similar Kind of People",
          },
          {
            backgroundColor: colors.pink,
            image: <Image boarding source={images[3]} />,
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

const DoneText = styled(Text)`
  ${({ theme: { colors, size } }) => ({
    fontSize: size.m1,
    color: colors.text,
  })}
`;

const Dot = styled.View`
  width: 6px;
  height: 6px;
  margin: 3px;

  ${({ selected, theme: { colors } }) => ({
    backgroundColor: selected ? colors.dark : colors.medium,
  })}
`;

export default OnBoardingScreen;
