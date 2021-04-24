import React from "react";
import styled from "styled-components";

// const messages = [
//   {
//     id: "1",
//     userName: "Jenny Doe",
//     userImg: require("../assets/users/user-3.jpg"),
//     messageTime: "4 mins ago",
//     messageText:
//       "Hey there, this is my test for a post of my social app in React Native.",
//   },
//   {
//     id: "2",
//     userName: "John Doe",
//     userImg: require("../assets/users/user-1.jpg"),
//     messageTime: "2 hours ago",
//     messageText:
//       "Hey there, this is my test for a post of my social app in React Native.",
//   },
//   {
//     id: "3",
//     userName: "Ken William",
//     userImg: require("../assets/users/user-4.jpg"),
//     messageTime: "1 hours ago",
//     messageText:
//       "Hey there, this is my test for a post of my social app in React Native.",
//   },
//   {
//     id: "4",
//     userName: "Selina Paul",
//     userImg: require("../assets/users/user-6.jpg"),
//     messageTime: "1 day ago",
//     messageText:
//       "Hey there, this is my test for a post of my social app in React Native.",
//   },
//   {
//     id: "5",
//     userName: "Christy Alex",
//     userImg: require("../assets/users/user-7.jpg"),
//     messageTime: "2 days ago",
//     messageText:
//       "Hey there, this is my test for a post of my social app in React Native.",
//   },
// ];

const MessageScreen = () => {
  return (
    <Container>
      <Text>Message screen</Text>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;

  ${({ theme: { colors, space } }) => ({
    paddingHorizontal: space.m2,
    backgroundColor: colors.white,
  })}
`;
const Text = styled.Text``;

export default MessageScreen;
