import { useFormikContext } from "formik";
import React, { useEffect } from "react";

import ImageInputList from "./../ImageInputList";
import ErrorMessage from "./ErrorMessage";

const FormSelectImages = ({ name, data }) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  useEffect(() => {
    if (data) setFieldValue(name, data);
  }, [data]);

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      values[name].filter((img) => img.uri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        error={errors[name]}
        images={values[name]}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormSelectImages;
