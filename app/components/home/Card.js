import React from "react";
import styled from "styled-components";

import { Image, Text } from "../../styles";
import UserInfo from "../UserInfo";
import InteractiveIcon from "./InteractiveIcon";

const Card = ({ description, image, likes, comments, ...rest }) => {
  return (
    <Container>
      <UserInfo {...rest} />
      <Details>
        <Text discription numberOfLines={4}>
          {description}
        </Text>
        {image !== "none" && <Image card source={image} />}
        <IconBox>
          <InteractiveIcon icon="ios-heart-outline" number={likes} />
          <InteractiveIcon icon="ios-chatbubble-outline" number={comments} />
          <InteractiveIcon icon="ios-share-outline" />
        </IconBox>
      </Details>
    </Container>
  );
};

const Container = styled.View`
  ${({ theme: { colors, radii, space } }) => ({
    backgroundColor: colors.light2,
    borderRadius: radii.s2,
    marginBottom: space.m1,
  })}
`;

const Details = styled.View`
  ${({ theme: { space } }) => ({
    marginLeft: space.l2,
  })}
`;

const IconBox = styled.View`
  flex-direction: row;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    padding: space.m1,
    paddingLeft: 0,
  })}
`;

export default Card;
