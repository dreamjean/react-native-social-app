import { useFormikContext } from "formik";
import React from "react";

import { colors } from "../../config";
import Button from "../Button";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      bgColor={colors.blue}
      color={colors.white}
      width="100%"
      onPress={handleSubmit}
      {...{ title }}
      marginTop={32}
    />
  );
};

export default SubmitButton;
