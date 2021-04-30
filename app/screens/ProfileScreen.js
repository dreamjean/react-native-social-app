import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect } from "react";
import { ScrollView } from "react-native";
import styled from "styled-components";

import AuthContext from "../auth/authContext";
import { Button, Icon } from "../components";
import { colors, images } from "../config";
import { auth, db } from "../firebase";
import routes from "../navigation/routes";
import { Image, Text } from "../styles";

const ProfileScreen = ({ route, navigation }) => {
  const { user, setUser } = useContext(AuthContext);
  // const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserInfo();
  }, [user]);

  // const fectchPosts = async () => {
  //   const listings = [];

  //   await db
  //     .collection("posts")
  //     .where("userId", "===", route.params ? route.params.userId : user.uid)
  //     .orderBy("postTime", "desc")
  //     .get()
  //     .then((queryShapshot) => {
  //       console.log("Total Posts: ", queryShapshot);
  //     });
  // };

  const fetchUserInfo = async () => {
    await db
      .collection("users")
      .doc(route?.params?.uid ? route?.params?.uid : user.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          // console.log("User Data", snapshot.data());
          setUser(snapshot.data());
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
    <ScrollView
      contentContainerStyle={{ flex: 1, padding: 20, justifyContent: "center" }}
      showsVerticalScrollIndicator={false}
    >
      <HeaderContainer>
        <Icon
          name="close-octagon-outline"
          size={50}
          style={{ position: "absolute", top: 0, left: -12 }}
          color={colors.text2}
          onPress={() => navigation.goBack()}
        />
        <ProfilePhoto>
          <Image avatar2 source={images[4]} />
        </ProfilePhoto>
        <Text title2 marginTop={16} opacity={0.8}>
          Jenny Doe
        </Text>
        <Text small center marginTop={6}>
          Lore ipsum dolor sit amet, consectetur adipiscing elit. Mauris a elit
          nisl.
        </Text>
        {route?.params ? (
          <ButtonsContainer>
            <Button
              title="Message"
              width={110}
              margin={5}
              borderColor={colors.blue}
              onPress={() => true}
            />
            <Button
              title="Following"
              width={130}
              margin={5}
              borderColor={colors.blue}
              onPress={() => true}
            />
          </ButtonsContainer>
        ) : (
          <ButtonsContainer>
            <Button
              title="Edit"
              width={70}
              margin={5}
              borderColor={colors.blue}
              onPress={() => navigation.navigate(routes.EDIT_PROFILE)}
            />
            <Button
              title="Logout"
              margin={5}
              borderColor={colors.blue}
              onPress={handleLogout}
            />
          </ButtonsContainer>
        )}
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

        <StatusBar style="dark" />
      </HeaderContainer>
    </ScrollView>
  );
};

const HeaderContainer = styled.View`
  align-items: center;
  flex: 1;

  ${({ theme: { space } }) => ({
    paddingTop: space.m3,
  })}
`;

const ProfilePhoto = styled.View`
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
`;

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  ${({ theme: { space } }) => ({
    marginHorizontal: space.m2,
    marginVertical: space.s3,
  })}
`;

const Box = styled.View`
  align-items: center;
  flex: 1;
`;

export default ProfileScreen;
