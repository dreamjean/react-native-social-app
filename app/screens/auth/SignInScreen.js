import * as Google from "expo-google-app-auth";
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

  const signInWithGoogleAsync = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "644520110653-9rprpcs1lha5po5g78d38r9skpmeqam4.apps.googleusercontent.com",
        iosClientId:
          "644520110653-4ct3u63l5bsg308skk0lbql1jagt4umr.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
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
        title="Sign Up with Facebook"
        backgroundColor={colors.light}
        color={colors.blue2}
      />
      <SocialButton
        socialIcon="google"
        title="Sign Up with Google"
        backgroundColor={colors.lightRed}
        color={colors.red}
        onPress={signInWithGoogleAsync}
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
