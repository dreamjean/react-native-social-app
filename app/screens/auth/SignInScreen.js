import React, { useState } from "react";
import { Keyboard } from "react-native";
import * as Yup from "yup";

import { Button, Container, SocialButton, TextLinking } from "../../components";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/form";
import { colors, images } from "../../config";
import { firebase } from "../../firebase";
import loginWithFacebookAsync from "../../firebase/loginWithFacebook";
import loginWithGoogleAsync from "../../firebase/loginWithGoogle";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
});

const SignInScreen = ({ navigation }) => {
  const [error, setError] = useState();
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const handleSubmit = async ({ email, password }) => {
    Keyboard.dismiss();

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        setError(error.message);
      });
  };

  return (
    <Container big title="RN Social APP" logo={images[0]}>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          blurOnSubmit={false}
          iconName="mail"
          keyboardAppearance="default"
          keyboardType="email-address"
          name="email"
          onSubmitEditing={() => focusNextField("password")}
          placeholder="Email"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="emailAddress"
        />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          blurOnSubmit={false}
          iconName="lock1"
          keyboardAppearance="default"
          keyboardType="default"
          maxLength={50}
          name="password"
          onRef={(input) => (inputs["password"] = input)}
          placeholder="Password"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
      <Button
        title="Forgot Password?"
        backgroundColor="transparent"
        color={colors.blue}
      />
      <SocialButton
        socialIcon="facebook"
        title="Sign In with Facebook"
        backgroundColor={colors.light}
        color={colors.blue2}
        onPress={loginWithFacebookAsync}
      />
      <SocialButton
        socialIcon="google"
        title="Sign In with Google"
        backgroundColor={colors.lightRed}
        color={colors.red}
        onPress={loginWithGoogleAsync}
      />
      <TextLinking
        blue
        caption="Don't have an account? "
        title="Create here"
        onPress={() => navigation.navigate("SignUp")}
      />
    </Container>
  );
};

export default SignInScreen;
