import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components";

import Card from "../components/home/Card";
import { colors } from "../config";
import { images } from "../config";
import { Text } from "../styles";

const listings = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
      <Header>
        <Title heading>RN Social</Title>
        <Pressable
          style={({ pressed }) => ({
            position: "absolute",
            top: 10,
            right: 20,
            opacity: pressed ? 0.5 : 1,
          })}
          onPress={() => true}
        >
          <Entypo name="plus" size={30} color={colors.blue} />
        </Pressable>
      </Header>
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
            />
          )}
        />
      </Listings>
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

  ${({ theme: { space } }) => ({
    padding: space.s2,
  })}
`;

const Title = styled(Text)`
  ${({ theme: { colors, size } }) => ({
    color: colors.blue,
    fontSize: size.m2,
  })}
`;

const Listings = styled.View`
  flex: 1;

  ${({ theme: { space } }) => ({
    paddingHorizontal: space.m1,
  })}
`;

export default HomeScreen;
