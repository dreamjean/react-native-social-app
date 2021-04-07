import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components";

import { Button, Icon } from "../components";
import { colors } from "../config";

const PostScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Icon
          name="chevron-left"
          size={50}
          color={colors.blue}
          onPress={() => navigation.goBack()}
        />
        <Button
          title="Post"
          color={colors.blue}
          backgroundColor="transparent"
          padding={12}
          margin={6}
          onPress={() => true}
        />
      </Header>
      <ButtonWrapper>
        <Pressable onPress={() => true}>
          <Animated.View>
            <MaterialCommunityIcons
              name="plus"
              size={24}
              color={colors.white}
            />
          </Animated.View>
        </Pressable>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.View``;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.lightBlue,
    paddingTop: space.m2,
  })}
`;

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export default PostScreen;
