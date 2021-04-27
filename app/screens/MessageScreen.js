import React from "react";
import { FlatList } from "react-native";
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
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <UserInfo
            avatar={item.userImg}
            name={item.userName}
            caption={item.messageText}
            rightTopComponent={<Text tiny>{item.messageTime}</Text>}
            onMessage={() => navigation.navigate(routes.CHAT, item)}
          />
        )}
        ItemSeparatorComponent={() => <View separator width="84%" />}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

export default MessageScreen;
