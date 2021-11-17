import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import styled from "styled-components/native";
import * as Yup from "yup";

import {
  Form,
  FormField2,
  FormImagePicker,
  SubmitButton,
} from "../components/form";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  about: Yup.string().max(100),
  phone: Yup.number().positive().integer().label("Phone"),
  country: Yup.string(),
  city: Yup.string(),
  userImg: Yup.string().nullable().label("Photo"),
});

const EditProfileScreen = () => {
  const [inputs] = useState([]);

  const focusNextField = (nextField) => inputs[nextField].focus();

  const handleSubmit = () => {};

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      extraScrollHeight={100}
      enableOnAndroid
      enableAutomaticScroll
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Form
          initialValues={{
            firstName: "",
            lastName: "",
            about: "",
            phone: "",
            country: "",
            city: "",
            userImg: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <FormImagePicker name="userImg" />
          <FormField2
            allowFontScaling={false}
            autoCapitalize="words"
            autoCompleteType="name"
            autoCorrect={false}
            blurOnSubmit={false}
            iconName="account-arrow-left-outline"
            keyboardAppearance="default"
            keyboardType="default"
            name="firstName"
            onSubmitEditing={() => focusNextField("lastName")}
            placeholder="First Name"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="name"
          />
          <FormField2
            allowFontScaling={false}
            autoCapitalize="words"
            autoCompleteType="name"
            autoCorrect={false}
            blurOnSubmit={false}
            iconName="account-arrow-right-outline"
            keyboardAppearance="default"
            keyboardType="default"
            name="lastName"
            onSubmitEditing={() => focusNextField("about")}
            placeholder="Last Name"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="name"
          />
          <FormField2
            allowFontScaling={false}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit={false}
            iconName="clipboard-text-outline"
            keyboardAppearance="default"
            keyboardType="default"
            multiline
            name="about"
            numberOfLines={3}
            onSubmitEditing={() => focusNextField("phone")}
            placeholder="About Me"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="none"
          />
          <FormField2
            blurOnSubmit={false}
            iconName="cellphone"
            keyboardAppearance="default"
            keyboardType="phone-pad"
            name="phone"
            onSubmitEditing={() => focusNextField("country")}
            placeholder="Phone Number"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="telephoneNumber"
          />
          <FormField2
            allowFontScaling={false}
            autoCapitalize="words"
            autoCompleteType="off"
            autoCorrect
            blurOnSubmit={false}
            iconName="earth"
            keyboardAppearance="default"
            keyboardType="default"
            name="country"
            onSubmitEditing={() => focusNextField("city")}
            placeholder="My Country"
            returnKeyLabel="next"
            returnKeyType="next"
            textContentType="countryName"
          />
          <FormField2
            allowFontScaling={false}
            autoCapitalize="words"
            autoCompleteType="off"
            autoCorrect
            blurOnSubmit={false}
            iconName="home-city-outline"
            keyboardAppearance="default"
            keyboardType="default"
            name="city"
            placeholder="My City"
            returnKeyLabel="go"
            returnKeyType="go"
            textContentType="addressCity"
          />
          <SubmitButton title="Save" />
        </Form>
      </Container>
    </KeyboardAwareScrollView>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors, space } }) => ({
    background: colors.white,
    padding: space.m1,
  })}
`;

export default EditProfileScreen;
