import React, { useState } from "react";
import * as Yup from "yup";

import { Container, TextButton } from "../components";
import { Form, FormField, SubmitButton } from "../components/form";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(50).label("Password"),
});

const SignInScreen = ({ navigation }) => {
  const [loading] = useState(false);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  return (
    <Container title="Welcome back.">
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
          keyboardAppearance="default"
          keyboardType="email-address"
          name="email"
          numberOfLines={1}
          onSubmitEditing={() => focusNextField("password")}
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="emailAddress"
          title="Email Address"
        />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          blurOnSubmit={false}
          keyboardAppearance="default"
          keyboardType="default"
          maxLength={50}
          name="password"
          numberOfLines={1}
          onRef={(input) => (inputs["password"] = input)}
          returnKeyLabel="go"
          returnKeyType="go"
          secureTextEntry
          textContentType="password"
          title="Password"
        />
        <SubmitButton title="Login" {...{ loading }} />
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
