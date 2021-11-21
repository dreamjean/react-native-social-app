import { useState } from "react";
import { Keyboard } from "react-native";
import * as Yup from "yup";

import authApi from "../../api/auth";
import useAuth from "../../auth/useAuth";
import { Button, Container } from "../../components";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../../components/form";
import { images, theme } from "../../config";
import routes from "../../navigation/routes";

const { colors, size } = theme;

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
  const auth = useAuth();

  const focusNextField = (nextField) => inputs[nextField].focus();

  const handleSubmit = async ({ email, password }) => {
    Keyboard.dismiss();

    try {
      const { user } = await authApi.login(email, password);
      auth.logIn(user);
    } catch ({ message }) {
      setError(message);
    }
  };

  return (
    <Container
      big
      title="RN Social APP"
      logo={images.logo}
      linkingCaption="Don't have an account? "
      linkingTitle="Create here"
      onFacebookLogin={authApi.loginWithFacebookAsync}
      onGoogleLogin={authApi.loginWithGoogleAsync}
      onNavigation={() => navigation.navigate(routes.SIGNUP)}
    >
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
        borderColor={colors.transparent}
        width="100%"
        textStyle={{ fontSize: size.s3, opacity: 0.75 }}
      />
    </Container>
  );
};

export default SignInScreen;
