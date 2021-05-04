import { useFormikContext } from "formik";
import React from "react";

import TextInput2 from "../editProfile/TextInput2";
import ErrorMessage from "./ErrorMessage";

const FormField2 = ({ name, onSubmitEditing, onRef, ...rest }) => {
  const {
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    values,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <TextInput2
        error={errors[name]}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        onSubmitEditing={onSubmitEditing ? onSubmitEditing : handleSubmit}
        ref={onRef}
        touched={touched[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormField2;
