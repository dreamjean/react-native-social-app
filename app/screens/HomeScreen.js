import Constants from "expo-constants";
import React from "react";
import { FlatList, StatusBar } from "react-native";
import styled from "styled-components";

import { Card } from "../components";
import { images } from "../config";

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

const HomeScreen = () => {
  return (
    <Container>
      <Listings>
        <FlatList
          data={listings}
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
              onLike={() => true}
              onShare={() => true}
              onComment={() => true}
            />
          )}
        />
      </Listings>
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

const Listings = styled.View`
  flex: 1;
`;

export default HomeScreen;
