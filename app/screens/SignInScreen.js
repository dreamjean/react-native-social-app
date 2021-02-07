import React from "react";
import * as Yup from "yup";

import { Container, TextButton } from "../components";
import { Form, FormField, SubmitButton } from "../components/form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  passowrd: Yup.string().required().min(5).max(50).label("Password"),
});

const SignInScreen = ({ navigation }) => {
  return (
    <Container title="Welcome back.">
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="email"
          title="Email Address"
          autoCapitalize="none"
          autoComplateType="email"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <FormField
          name="passowrd"
          title="Password"
          autoCapitalize="none"
          autoComplateType="password"
          autoCorrect={false}
          keyboardType="default"
          secureTextEntry
        />
        <SubmitButton title="Login" />
      </Form>
      <TextButton
        caption="New to SocialApp?"
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
        marginTop={16}
      />
    </Container>
  );
};

export default SignInScreen;
