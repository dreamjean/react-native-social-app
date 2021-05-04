import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet } from "react-native";
import styled from "styled-components";

import { Card, Icon } from "../components";
import { colors } from "../config";
import { db } from "../firebase";
import routes from "../navigation/routes";
import { Text } from "../styles";

dayjs.extend(relativeTime);

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [posts]);

  const fetchPosts = async () => {
    const listings = [];

    try {
      await db
        .collection("posts")
        .orderBy("createdAt", "desc")
        .get()
        .then((queryShapshot) => {
          queryShapshot.forEach((doc) => {
            const {
              userId,
              caption,
              images,
              createdAt,
              likes,
              comments,
            } = doc.data();

            listings.push({
              id: doc.id,
              userId,
              userName: "Test Name",
              userImg:
                "https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg",
              createdAt,
              caption,
              images,
              liked: false,
              likes,
              comments,
            });
          });
        });

      setPosts(listings);

      if (loading) setLoading(false);

      // console.log("listings: ", listings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Header>
        <Text heading blue>
          RN Social
        </Text>
      </Header>
      <Listings>
        <FlatList
          data={posts}
          contentContainerStyle={{ paddingBottom: 18 }}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              title={item.userName}
              avatar={item.userImg}
              subtitle={dayjs(dayjs.unix(item.createdAt.seconds)).fromNow()}
              images={item.images}
              caption={item.caption}
              likes={item.likes}
              comments={item.comments}
              isLike={item.liked}
              onPersonalPage={() =>
                navigation.navigate(routes.USER_PROFILE, {
                  userId: item.userId,
                })
              }
              onLike={() => true}
              onShare={() => true}
              onComment={() => true}
            />
          )}
          showsVerticalScrollIndicator={false}
          onRefresh={fetchPosts}
          refreshing={loading}
        />
      </Listings>
      <Icon
        name="pen-plus"
        backgroundColor={colors.blue}
        size={50}
        style={{
          position: "absolute",
          bottom: 15,
          right: 18,
        }}
        onPress={() => navigation.navigate(routes.POST)}
      />
      <StatusBar barStyle="dark-content" />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.white,
    paddingTop: Constants.statusBarHeight,
  })}
`;

const Header = styled.View`
  align-items: center;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.blue,
    paddingTop: space.m1,
    paddingBottom: space.s1,
  })}
`;

const Listings = styled.View`
  flex: 1;
`;

export default HomeScreen;
