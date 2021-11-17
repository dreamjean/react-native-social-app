import { Text } from "../../styles";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <Text danger>{error}</Text>;
};

export default ErrorMessage;
