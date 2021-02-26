import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import styled from "styled-components";

// import { FirebaseContext } from "../api/FirebaseContext";
import AuthContext from "../auth/authContext";
import { Image, Text } from "../styles";

const ProfileScreen = () => {
  const { user } = useContext(AuthContext);
  // const firebase = useContext(FirebaseContext);
  // console.log(user);

  return (
    <Container>
      <ProfilePhotoContainer>
        <Image
          avatar
          source={
            user.profilePhotoUrl === "default"
              ? require("../assets/avatar-default.jpg")
              : { uri: user.profilePhotoUrl }
          }
        />
      </ProfilePhotoContainer>
      <Text>{user.username}</Text>

      <StatusBar style="dark" />
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  flex: 1;

  ${({ theme: { space } }) => ({
    marginTop: space.l1,
  })}
`;

const ProfilePhotoContainer = styled.View`
  shadow-opacity: 0.8;

  ${({ theme: { colors, radii } }) => ({
    shadowRadius: radii.l2,
    shadowColor: colors.dark,
  })};
`;

export default ProfileScreen;
