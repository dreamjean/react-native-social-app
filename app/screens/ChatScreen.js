import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import {
  Bubble,
  GiftedChat,
  InputToolbar,
  Send,
} from "react-native-gifted-chat";

import { theme } from "../config";

const { colors, fonts, size, space, radii } = theme;

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: colors.blue,
          padding: space.s1,
          borderRadius: radii.m2,
          borderTopRightRadius: radii.s1,
        },
        left: {
          backgroundColor: colors.white,
          padding: space.s1,
          borderRadius: radii.m2,
          borderTopLeftRadius: radii.s1,
        },
      }}
      textStyle={{
        right: {
          color: colors.white,
          fontFamily: fonts[4],
          fontSize: size.s3,
        },
        left: {
          color: colors.text,
          fontFamily: fonts[4],
          fontSize: size.s3,
        },
      }}
    />
  );

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{
        borderTopColor: colors.blue,
        borderRadius: radii.m2,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: colors.blue,
        paddingHorizontal: space.s1,
      }}
    />
  );

  const renderSend = (props) => (
    <Send
      {...props}
      containerStyle={{
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        name="send-circle"
        size={40}
        color={colors.blue}
      />
    </Send>
  );

  return (
    <GiftedChat
      messages={messages}
      user={{
        _id: 1,
      }}
      onSend={(messages) => onSend(messages)}
      onPressAvatar={() => true}
      renderAvatarOnTop
      showUserAvatar
      scrollToBottom
      scrollToBottomComponent={() => (
        <FontAwesome name="angle-double-down" size={22} color={colors.text} />
      )}
      {...{ renderBubble, renderSend, renderInputToolbar }}
    />
  );
};

export default ChatScreen;
