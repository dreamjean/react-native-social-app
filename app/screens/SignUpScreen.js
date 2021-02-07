import React from "react";
import * as Yup from "yup";

import { Container, TextButton } from "../components";
import { Form, FormField, SubmitButton } from "../components/form";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  passowrd: Yup.string().required().min(5).max(50).label("Password"),
});

const SignUpScreen = ({ navigation }) => {
  return (
    <Container title="Let's get started.">
      <Form
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="username"
          title="Username"
          autoCapitalize="none"
          autoComplateType="name"
          autoCorrect={false}
          keyboardType="default"
        />
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
        <SubmitButton title="Register" />
      </Form>
      <TextButton
        caption="Already have an account?"
        title="Sign In"
        onPress={() => navigation.navigate("SignIn")}
        marginTop={24}
      />
    </Container>
  );
};

export default SignUpScreen;
