import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styled from "styled-components/native";

import { colors } from "../../config";
import { Image, Text } from "../../styles";
import Icon from "../Icon";
import SocialButton from "./SocialButton";
import TextLinking from "./TextLinking";

const Container = ({
  big = false,
  blue = false,
  children,
  logo,
  linkingCaption,
  linkingTitle,
  onFacebookLogin,
  onGoogleLogin,
  onNavigation,
  title,
}) => {
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
        <Header>
          {logo && <Image logo resizeMode="cover" source={logo} />}
          <Text heading center {...{ big }} marginTop={logo ? 10 : 30}>
            {title}
          </Text>
        </Header>
        <Auth>{children}</Auth>
        <Footer>
          <SocialButton
            socialIcon="facebook"
            title="Sign In with Facebook"
            backgroundColor={colors.light}
            color={colors.blue2}
            onPress={onFacebookLogin}
          />
          <SocialButton
            socialIcon="google"
            title="Sign In with Google"
            backgroundColor={colors.lightRed}
            color={colors.red}
            onPress={onGoogleLogin}
          />
          <TextLinking
            blue={blue}
            caption={linkingCaption}
            title={linkingTitle}
            onPress={onNavigation}
          />
        </Footer>
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

const Header = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { space } }) => ({
    paddingTop: space.m3,
  })}
`;

const IconBox = styled.View`
  position: absolute;
  top: 30px;
  left: 15px;
`;

const Auth = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

const Footer = styled.View`
  width: 100%;
  align-self: flex-end;

  ${({ theme: { space } }) => ({
    padding: space.m1,
    marginBottom: space.s1,
  })}
`;

export default Container;
