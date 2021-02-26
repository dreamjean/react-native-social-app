import React, { useState } from "react";
import styled from "styled-components";
import * as Yup from "yup";

import { Container, SocialButton, TextLinking } from "../../components";
import { Form, FormField, SubmitButton } from "../../components/form";
import { colors } from "../../config";
import { Text } from "../../styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required()
    .label("Confirm Password"),
});

const SignUpScreen = ({ navigation }) => {
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  return (
    <Container small title="Let's get started.">
      <Form
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
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
          onSubmitEditing={() => focusNextField("password")}
          onRef={(input) => (inputs["email"] = input)}
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
          onSubmitEditing={() => focusNextField("confirmPassword")}
          onRef={(input) => (inputs["password"] = input)}
          placeholder="Password"
          returnKeyLabel="next"
          returnKeyType="next"
          secureTextEntry
          textContentType="password"
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
          name="confirmPassword"
          onRef={(input) => (inputs["confirmPassword"] = input)}
          placeholder="Confirm Password"
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
      <Description>
        <Text button2>By registering, you comfirm that accept our</Text>
        <TextLinking title="Terms of service " onPress={() => true} />
        <TextLinking
          caption="and"
          title="Privacy policy"
          onPress={() => true}
        />
      </Description>
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
        caption="Already have an account?"
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
    </Container>
  );
};

const Description = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme: { space } }) => ({
    marginTop: space.m1 + space.s2,
    marginBottom: space.m1,
  })}
`;

export default SignUpScreen;
