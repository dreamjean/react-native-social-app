import React from "react";
import { Pressable } from "react-native";

import { Text } from "../styles";

const TextButton = ({ caption, title, marginTop, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        marginTop,
        alignItems: "center",
      })}
      {...{ onPress }}
    >
      <Text button2>
        {caption}{" "}
        <Text button2 primary>
          {title}
        </Text>
      </Text>
    </Pressable>
  );
};

export default TextButton;
