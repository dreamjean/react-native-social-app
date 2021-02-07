import React from "react";

import { Text } from "../../styles";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <Text error>{error}</Text>;
};

export default ErrorMessage;
