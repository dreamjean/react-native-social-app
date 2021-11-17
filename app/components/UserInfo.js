import { Pressable } from "react-native";
import styled from "styled-components/native";

import { Image, Text } from "../styles";

const UserInfo = ({
  avatar,
  title,
  subtitle,
  rightTopComponent,
  onMessage,
  onPersonalPage,
}) => {
  return (
    <Pressable onPress={onMessage}>
      <Container>
        <Pressable onPress={onPersonalPage}>
          <Image avatar source={{ uri: avatar }} />
        </Pressable>
        <TextBox>
          <Details>
            <Text title numberOfLines={1}>
              {title}
            </Text>
            {rightTopComponent}
          </Details>
          <Text medium numberOfLines={1} marginTop={4}>
            {subtitle}
          </Text>
        </TextBox>
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.s3,
  })}
`;

const TextBox = styled.View`
  flex: 1;
  justify-content: center;

  ${({ theme: { space } }) => ({
    marginLeft: space.s3,
  })}
`;

const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export default UserInfo;
