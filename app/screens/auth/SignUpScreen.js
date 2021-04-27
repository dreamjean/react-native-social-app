import React, { useState } from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";
import * as Yup from "yup";

import {
  ActivityIndicator,
  Container,
  SocialButton,
  TextLinking,
} from "../../components";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/form";
import { colors } from "../../config";
import { db, firebase } from "../../firebase";
import loginWithFacebookAsync from "../../firebase/loginWithFacebook";
import loginWithGoogleAsync from "../../firebase/loginWithGoogle";
import routes from "../../navigation/routes";
import { Text } from "../../styles";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().max(50).label("name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .min(6)
    .max(50)
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\d/, "Password must have a number")
    .label("Password"),
});

const SignUpScreen = ({ navigation }) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();
    setLoading(true);

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password);

      const { uid } = firebase.auth().currentUser;

      db.collection("users").doc(uid).set({
        name: userInfo.name,
        email: userInfo.email,
      });
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  if (loading) return <ActivityIndicator />;

  return (
    <Container small title="Create an account">
      <Form
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={error} visible={error} />
        <FormField
          allowFontScaling={false}
          autoCapitalize="none"
          autoCompleteType="name"
          autoCorrect={false}
          blurOnSubmit={false}
          iconName="user"
          keyboardAppearance="default"
          keyboardType="default"
          name="name"
          onSubmitEditing={() => focusNextField("email")}
          placeholder="name"
          returnKeyLabel="next"
          returnKeyType="next"
          textContentType="name"
        />
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
          onRef={(input) => (inputs["password"] = input)}
          placeholder="Password"
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
        caption="Already have an account?"
        title="Sign In"
        onPress={() => navigation.navigate(routes.SIGNIN)}
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
