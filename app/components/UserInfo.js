import React from "react";
import styled from "styled-components";

import { Image, Text } from "../styles";

const UserInfo = ({ avatar, name, caption }) => {
  return (
    <Container>
      <Image avatar source={avatar} />
      <TextBox>
        <Text title numberOfLines={1}>
          {name}
        </Text>
        <Text medium numberOfLines={1} marginTop={3}>
          {caption}
        </Text>
      </TextBox>
    </Container>
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
    marginLeft: space.s2,
  })}
`;
export default UserInfo;
