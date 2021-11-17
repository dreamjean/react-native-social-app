import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { colors } from "../../config";
import { Image, Text } from "../../styles";
import Icon from "../Icon";

const ProfileCard = ({
  createdAt,
  caption,
  images,
  onModalOpen,
  onPostDetails,
  showOperation = false,
}) => {
  return (
    <Container>
      <PostTimeContainer>
        <Text small>{createdAt}</Text>
        {showOperation && (
          <Icon
            name="dots-vertical"
            color={colors.text}
            size={30}
            onPress={onModalOpen}
          />
        )}
      </PostTimeContainer>
      <RectButton onPress={onPostDetails}>
        <TextWraper>
          <Text description style={{ color: colors.grey2 }}>
            {caption}
          </Text>
        </TextWraper>
        {images && <Image card2 source={images} />}
      </RectButton>
    </Container>
  );
};

const Container = styled.View`
  ${({ theme: { space } }) => ({
    padding: space.m1,
    marginTop: space.s2,
  })}
`;

const PostTimeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingVertical: space.s2,
  })}
`;

const TextWraper = styled.View`
  width: 100%;
`;

export default ProfileCard;
