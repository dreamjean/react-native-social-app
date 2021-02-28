import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styled from "styled-components";

import { colors } from "../../config";
import { Image, Text } from "../../styles";
import Icon from "../Icon";

const Container = ({ logo, title, big = false, children }) => {
  const navigation = useNavigation();

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
        {!logo && (
          <IconBox>
            <Icon
              name="long-arrow-left"
              color={colors.text}
              IconComponent={FontAwesome}
              size={32}
              onPress={() => navigation.goBack()}
            />
          </IconBox>
        )}
        {logo && <Image logo resiMode="cover" source={logo} />}
        <Text heading center {...{ big }}>
          {title}
        </Text>
        <Auth>{children}</Auth>
      </Wrapper>
      <StatusBar style="dark" />
    </KeyboardAwareScrollView>
  );
};

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white2,
  })}
`;

const IconBox = styled.View`
  position: absolute;
  top: 30px;
  left: 15px;
`;

const Auth = styled.View`
  justify-content: center;
  width: 100%;

  ${({ theme: { space } }) => ({
    padding: space.m1,
    marginTop: space.s3,
  })}
`;

export default Container;
