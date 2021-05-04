import React from "react";
import { FlatList, StyleSheet } from "react-native";
import styled from "styled-components";

import { UserInfo } from "../components";
import routes from "../navigation/routes";
import { Text, View } from "../styles";

const messages = [
  {
    id: "1",
    userName: "Jenny Doe",
    userImg: require("../assets/users/user-3.jpg"),
    messageTime: "4 mins ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "2",
    userName: "John Doe",
    userImg: require("../assets/users/user-1.jpg"),
    messageTime: "2 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "3",
    userName: "Ken William",
    userImg: require("../assets/users/user-4.jpg"),
    messageTime: "1 hours ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "4",
    userName: "Selina Paul",
    userImg: require("../assets/users/user-6.jpg"),
    messageTime: "1 day ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
  {
    id: "5",
    userName: "Christy Alex",
    userImg: require("../assets/users/user-7.jpg"),
    messageTime: "2 days ago",
    messageText:
      "Hey there, this is my test for a post of my social app in React Native.",
  },
];

const MessageScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Text title2>Message</Text>
      </Header>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        contentContainerStyle={{ paddingTop: 6 }}
        renderItem={({ item }) => (
          <UserInfo
            avatar={item.userImg}
            title={item.userName}
            subtitle={item.messageText}
            rightTopComponent={
              <Text tiny style={{ textTransform: "none" }}>
                {item.messageTime}
              </Text>
            }
            onMessage={() => navigation.navigate(routes.CHAT, item)}
          />
        )}
        ItemSeparatorComponent={() => <View separator width="83%" />}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  align-items: center;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;

  ${({ theme: { colors, space } }) => ({
    backgroundColor: colors.white,
    borderColor: colors.grey,
    paddingTop: space.m3,
    paddingBottom: space.s2,
  })}
`;

export default MessageScreen;
