import React from "react";
import styled from "styled-components";

// import { images } from "../../config";
import { Image, Text } from "../../styles";
import { colors } from "../../styles";
import Icon from "../Icon";

const ProfileCard = ({ postTime, description, onPress, images }) => {
  return (
    <Container>
      <PostTimeContainer>
        <Text>{postTime}</Text>
        <Icon
          name="dots-vertical"
          color={colors.text}
          size={24}
          {...{ onPress }}
        />
      </PostTimeContainer>
      <Text description>{description}</Text>
      <Images>
        {images.map(({ uri }) => (
          <Image key={uri} source={uri} />
        ))}
      </Images>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const PostTimeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    paddingVertical: space.s2,
  })}
`;

const Images = styled.View``;

export default ProfileCard;
