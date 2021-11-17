import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { constants } from "../../config";
import { Text } from "../../styles";

const { ROW_HEIGHT } = constants;

const SocialButton = ({
  backgroundColor,
  color,
  title,
  onPress,
  socialIcon,
}) => {
  return (
    <Touchable {...{ backgroundColor, onPress }}>
      <IconBox>
        <FontAwesome name={socialIcon} size={22} color={color} />
      </IconBox>
      <TextBox>
        <Text button1 {...{ color }}>
          {title}
        </Text>
      </TextBox>
    </Touchable>
  );
};

const Touchable = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  height: ${ROW_HEIGHT}px;

  ${({ backgroundColor, theme: { space, radii } }) => ({
    backgroundColor,
    borderRadius: radii.s1,
    marginTop: space.m1,
  })}
`;

const IconBox = styled.View`
  width: 50px;
  justify-content: center;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.s2,
  })}
`;

const TextBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default SocialButton;
