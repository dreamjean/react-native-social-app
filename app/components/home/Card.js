import React from "react";
import styled from "styled-components";

import { Image, Text } from "../../styles";
import UserInfo from "../UserInfo";
import Interaction from "./Interaction";

const Card = ({
  description,
  image,
  likes,
  comments,
  isLike,
  onShare,
  onComment,
  onLike,
  ...rest
}) => {
  return (
    <Container>
      <UserInfo {...rest} />
      <Details>
        <Text description numberOfLines={4}>
          {description}
        </Text>
        {image !== "none" && <Image card source={image} />}
        {image === "none" && <Divider />}
        <InteractionWrapper>
          <Interaction icon="share-outline" onPress={onShare} />
          <Interaction
            icon="chatbubble-ellipses-outline"
            number={comments}
            onPress={onComment}
          />
          <Interaction
            active={isLike}
            icon={isLike ? "heart" : "heart-outline"}
            number={likes}
            onPress={onLike}
          />
        </InteractionWrapper>
      </Details>
    </Container>
  );
};

const Container = styled.View`
  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.light2,
    borderRadius: radii.s2,
    margin: space.m1,
    marginBottom: 0,
  })}
`;

const Details = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.l2,
    marginRight: space.s2,
  })}
`;

const Divider = styled.View`
  height: 1px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.grey,
    opacity: 0.6,
    marginTop: space.s2,
  })}
`;

const InteractionWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    padding: space.s3,
    paddingLeft: 0,
  })}
`;

export default Card;
