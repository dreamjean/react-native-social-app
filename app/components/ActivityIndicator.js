import LottieView from "lottie-react-native";
import styled from "styled-components/native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <Container>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/690-loading.json")}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  opacity: 0.7;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
  })}
`;

export default ActivityIndicator;
