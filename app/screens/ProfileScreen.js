import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

import AuthContext from "../auth/authContext";
import { Button } from "../components";
import { auth, db } from "../firebase";
import routes from "../navigation/routes";
import { Image, Text } from "../styles";

const ProfileScreen = ({ route, navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, [user]);

  const fetchUserInfo = async () => {
    const { uid } = auth.currentUser;

    await db
      .collection("users")
      .doc(route?.params?.uid ? route?.params?.uid : uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          console.log("User Data", snapshot.data());
          setUser(snapshot.data());
        } else {
          console.log("Dose not exist.");
        }
      });
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.log("Error Logout: ", error.message);
    }
  };

  return (
    <ScrollView>
      <Container>
        <ProfilePhoto>
          <Image
            avatar2
            source={
              user.avatar
                ? { uri: user.avatar }
                : require("../assets/avatar-default.jpg")
            }
          />
        </ProfilePhoto>
        <Text title2 marginTop={16} opacity={0.8}>
          {user.name}
        </Text>
        <StatsContainer>
          <Box>
            <Text statNum>21</Text>
            <Text medium opacity={0.6}>
              Posts
            </Text>
          </Box>
          <Box>
            <Text statNum>981</Text>
            <Text medium opacity={0.6}>
              Followers
            </Text>
          </Box>
          <Box>
            <Text statNum>63</Text>
            <Text medium opacity={0.6}>
              Following
            </Text>
          </Box>
        </StatsContainer>

        <ButtonsContainer>
          <Button
            title="Edit"
            width={70}
            margin={5}
            onPress={() => navigation.navigate(routes.EDIT_PROFILE)}
          />
          <Button title="Logout" margin={5} onPress={handleLogout} />
        </ButtonsContainer>
        <StatusBar style="dark" />
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  align-items: center;
  flex: 1;

  ${({ theme: { space } }) => ({
    paddingTop: space.l1,
  })}
`;

const ProfilePhoto = styled.View`
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
`;

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    marginHorizontal: space.m2,
    marginVertical: space.m1,
  })}
`;

const Box = styled.View`
  align-items: center;
  flex: 1;
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export default ProfileScreen;
