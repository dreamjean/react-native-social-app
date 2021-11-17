import { Pressable } from "react-native";
import styled from "styled-components/native";

import { Text } from "../../styles";

const TextLinking = ({ blue = false, caption, title, onPress }) => {
  return (
    <Container>
      <Text button2>{caption} </Text>
      <Pressable
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
        {...{ onPress }}
      >
        <Cover button2 {...{ blue }}>
          {title}
        </Cover>
      </Pressable>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  ${({ theme: { space } }) => ({
    marginTop: space.m1,
  })}
`;

const Cover = styled(Text)`
  ${({ blue, theme: { colors, fonts } }) => ({
    color: blue ? colors.blue : colors.red,
    fontFamily: fonts[2],
  })}
`;

export default TextLinking;
