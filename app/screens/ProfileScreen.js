import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import styled from "styled-components/native";

import { auth } from "../api";
// import AuthContext from "../auth/authContext";
import { Button, Icon, OperationModal, ProfileCard } from "../components";
import { colors, images } from "../config";
import listings from "../data/listings";
import routes from "../navigation/routes";
import { Image, Text } from "../styles";

dayjs.extend(relativeTime);

const ProfileScreen = ({ route, navigation }) => {
  // const { user, setUser } = useContext(AuthContext);
  // const [currentUser, setCurrentUser] = useState(null);
  // const [userPosts, setUserPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   fetchUserInfo();
  // }, []);

  // useEffect(() => {
  //   fetchUserPosts();
  // }, [userPosts]);

  // const fetchUserPosts = async () => {
  //   try {
  //     const listings = [];

  //     await db
  //       .collection("posts")
  //       .where("userId", "==", route.params ? route.params.userId : user.uid)
  //       .orderBy("createdAt", "desc")
  //       .get()
  //       .then((queryShapshot) => {
  //         console.log("Total Posts: ", queryShapshot);

  //         queryShapshot.forEach((doc) => {
  //           const { userId, caption, images, createdAt, likes, comments } =
  //             doc.data();

  //           listings.push({
  //             id: doc.id,
  //             userId,
  //             userName: "Test Name",
  //             userImg:
  //               "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg",
  //             createdAt,
  //             caption,
  //             images,
  //             liked: false,
  //             likes,
  //             comments,
  //           });

  //           setUserPosts(listings);
  //         });
  //       });

  //     setUserPosts(listings);

  //     if (loading) setLoading(false);

  //     console.log("Posts: ", userPosts);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchUserInfo = async () => {
  //   await db
  //     .collection("users")
  //     .doc(route?.params?.uid ? route?.params?.uid : user.uid)
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.exists) {
  //         // console.log("User Data", snapshot.data());
  //         setUser(snapshot.data());
  //       }
  //     });
  // };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // setUser(null);
    } catch (error) {
      console.log("Error Logout: ", error.message);
    }
  };

  // const DeletePost = (postId) => {
  //   db.collection("posts")
  //     .doc(postId)
  //     .get()
  //     .then((snapshot) => {
  //       if (snapshot.exists) {
  //         console.log(snapshot.data());
  //       }
  //     });
  // };

  const handleDelete = () => {
    Alert.alert("Delete", "Are you shore you want to delete this post?", [
      { text: "Yes", onPress: () => {} },
      { text: "No" },
    ]);
  };

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 20,
          justifyContent: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <HeaderContainer>
          {route?.params && (
            <Icon
              name="close-octagon-outline"
              size={50}
              style={{ position: "absolute", top: 0, left: 10 }}
              color={colors.text2}
              onPress={() => navigation.goBack()}
            />
          )}
          <ProfilePhoto>
            <Image avatar2 source={images[4]} />
          </ProfilePhoto>
          <Text title2 marginTop={16} opacity={0.8}>
            Jenny Doe
          </Text>
          <Text small center marginTop={6}>
            Lore ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
            elit nisl.
          </Text>
        </HeaderContainer>
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

        {listings.map((listing) => (
          <ProfileCard
            key={listing.id}
            createdAt={listing.createdAt}
            caption={listing.caption}
            images={listing.images}
            showOperation={!route.params}
            onModalOpen={() => setModalVisible(true)}
            onPostDetails={() => {}}
          />
        ))}
      </ScrollView>

      <OperationModal
        visible={modalVisible}
        onDelete={handleDelete}
        onCloseModal={() => setModalVisible(false)}
      />

      <StatusBar style="dark" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  align-items: center;
  flex: 1;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m3,
    paddingTop: space.m1 + space.m3,
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
