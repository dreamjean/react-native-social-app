import { useFormikContext } from "formik";
import React from "react";

import Button from "../Button";

const SubmitButton = ({ title, loading }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button onPress={handleSubmit} {...{ title, loading }} marginTop={32} />
  );
};

export default SubmitButton;
