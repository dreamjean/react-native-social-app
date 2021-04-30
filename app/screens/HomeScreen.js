import Constants from "expo-constants";
import React from "react";
import { FlatList, StatusBar, StyleSheet } from "react-native";
import styled from "styled-components";

import { Card, Icon } from "../components";
import { colors, images } from "../config";
import routes from "../navigation/routes";
import { Text } from "../styles";

const listings = [
  {
    id: 1,
    userName: "Jenny Doe",
    userImg: images[6],
    postTime: "4 mins ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: images[15],
    liked: true,
    likes: "14",
    comments: "5",
  },
  {
    id: 2,
    userName: "John Doe",
    userImg: images[4],
    postTime: "2 hours ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: "none",
    liked: false,
    likes: "8",
    comments: "0",
  },
  {
    id: 3,
    userName: "Ken William",
    userImg: images[7],
    postTime: "1 hours ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: images[14],
    liked: true,
    likes: "1",
    comments: "0",
  },
  {
    id: 4,
    userName: "Selina Paul",
    userImg: images[9],
    postTime: "1 day ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: images[16],
    liked: true,
    likes: "22",
    comments: "4",
  },
  {
    id: 5,
    userName: "Christy Alex",
    userImg: images[10],
    postTime: "2 days ago",
    post:
      "Hey there, this is my test for a post of my social app in React Native.",
    postImg: "none",
    liked: false,
    likes: "0",
    comments: "0",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Text heading blue>
          RN Social
        </Text>
      </Header>
      <Listings>
        <FlatList
          data={listings}
          contentContainerStyle={{ paddingBottom: 18 }}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              name={item.userName}
              avatar={item.userImg}
              caption={item.postTime}
              image={item.postImg}
              description={item.post}
              likes={item.likes}
              comments={item.comments}
              isLike={item.liked}
              onPersonalPage={() =>
                navigation.navigate(routes.USER_PROFILE, item)
              }
              onLike={() => true}
              onShare={() => true}
              onComment={() => true}
            />
          )}
          showsVerticalScrollIndicator={false}
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
