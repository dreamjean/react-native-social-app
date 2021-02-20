import React, { useState } from "react";
import * as Yup from "yup";

import { Container, TextButton } from "../components";
import {
  Form,
  FormField,
  FormImagePicker,
  SubmitButton,
} from "../components/form";

const validationSchema = Yup.object().shape({
  avatar: Yup.string().required().nullable().label("Photo"),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).max(50).label("Password"),
});

const SignUpScreen = ({ navigation }) => {
  const [loading] = useState(false);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  return (
    <Container signUP title="Let's get started.">
      <Form
        initialValues={{ avatar: null, username: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="avatar" />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="name"
          autoCorrect={false}
          blurOnSubmit={false}
          keyboardAppearance="default"
          keyboardType="default"
          name="username"
          numberOfLines={1}
          onSubmitEditing={() => focusNextField("email")}
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="name"
          title="Username"
        />
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
          onRef={(input) => (inputs["email"] = input)}
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
        <SubmitButton title="Register" {...{ loading }} />
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
