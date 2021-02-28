import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import styled from "styled-components";

import AuthContext from "../auth/authContext";
import { Button } from "../components";
import { firebase } from "../firebase";
import { Image, Text } from "../styles";

const ProfileScreen = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.log("Error Logout: ", error.message);
    }
  };

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
      <Button title="Logout" onPress={handleLogout} />
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
