import { StatusBar } from "expo-status-bar";
import React from "react";
import { Pressable } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import styled from "styled-components";

import { images, theme } from "../../config";
import routes from "../../navigation/routes";
import { Text } from "../../styles";

const { colors, fonts, size } = theme;

const OnBoardingScreen = ({ navigation }) => {
  const Done = ({ ...props }) => (
    <Pressable
      style={({ pressed }) => ({
        padding: 10,
        opacity: pressed ? 0.5 : 1,
        backgroundColor: pressed ? colors.light : colors.lightWhite,
        borderRadius: 8,
        marginRight: 10,
      })}
      {...props}
    >
      <DoneText button1>Done</DoneText>
    </Pressable>
  );

  const Next = ({ ...props }) => (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        marginRight: 20,
      })}
      {...props}
    >
      <DoneText button2>Next</DoneText>
    </Pressable>
  );

  const Skip = ({ ...props }) => (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        marginLeft: 20,
      })}
      {...props}
    >
      <DoneText button2>Skip</DoneText>
    </Pressable>
  );

  return (
    <Container>
      <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={({ selected }) => <Dot {...{ selected }} />}
        onSkip={() => navigation.replace(routes.SIGNIN)}
        onDone={() => navigation.navigate(routes.SIGNIN)}
        imageContainerStyles={{
          width: "60%",
        }}
        titleStyles={{
          color: colors.medium,
          fontFamily: fonts[1],
          fontSize: size.l,
        }}
        subTitleStyles={{
          color: colors.text2,
          fontFamily: fonts[2],
          fontSize: size.m1,
        }}
        pages={[
          {
            backgroundColor: colors.green,
            image: <Image resizeMode="contain" source={images[1]} />,
            title: "Connect to the World",
            subtitle: "A New Way To Connect With The World",
          },
          {
            backgroundColor: colors.yellow,
            image: <Image resizeMode="contain" source={images[2]} />,
            title: "Share Your Favorites",
            subtitle: "Share Your Thoughts With Similar Kind of People",
          },
          {
            backgroundColor: colors.pink,
            image: <Image resizeMode="contain" source={images[3]} />,
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
    color: colors.grey2,
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

const Image = styled.Image``;

export default OnBoardingScreen;
