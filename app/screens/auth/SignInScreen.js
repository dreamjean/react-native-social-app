import React, { useState } from "react";
import * as Yup from "yup";

import { Button, Container, SocialButton, TextLinking } from "../../components";
import { Form, FormField, SubmitButton } from "../../components/form";
import { colors, images } from "../../config";

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
  const [loading] = useState(false);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  return (
    <Container big title="RN Social APP" logo={images[0]}>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
          numberOfLines={1}
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
          numberOfLines={1}
          onRef={(input) => (inputs["password"] = input)}
          placeholder="Password"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" {...{ loading }} />
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
