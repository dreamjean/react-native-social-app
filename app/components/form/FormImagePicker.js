import { useFormikContext } from "formik";
import React, { useEffect } from "react";

import ImageInput from "../ImageInput";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name, data }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();

  useEffect(() => {
    if (data) setFieldValue(name, data);
  }, [data]);

  return (
    <>
      <ImageInput error={errors[name]} image={values[name]} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
