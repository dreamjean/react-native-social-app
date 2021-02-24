import React, { useContext, useState } from "react";
import { Keyboard } from "react-native";
import * as Yup from "yup";

import { FirebaseContext } from "../api/FirebaseContext";
import AuthContext from "../auth/authContext";
import { Container, TextButton } from "../components";
import {
  Form,
  FormField,
  FormImagePicker,
  SubmitButton,
} from "../components/form";

const validationSchema = Yup.object().shape({
  profilePhoto: Yup.string().nullable(),
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(50).label("Password"),
});

const SignUpScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [inputs] = useState([]);
  const firebase = useContext(FirebaseContext);
  const { setUser } = useContext(AuthContext);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const handleSubmit = async (userInfo) => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      const user = await firebase.createUser(userInfo);

      setUser({ ...user, isLoggedIn: true });
    } catch (error) {
      console.log("Error @signUp: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container signUP title="Let's get started.">
      <Form
        initialValues={{
          profilePhoto: null,
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="profilePhoto" />
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
