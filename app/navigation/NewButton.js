import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../config";

const NewButton = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        opacity: pressed ? 0.5 : 1,
        top: 4,
        marginHorizontal: 15,
      })}
      {...{ onPress }}
    >
      <PlusBox>
        <MaterialCommunityIcons name="plus" size={24} color={colors.white} />
      </PlusBox>
    </Pressable>
  );
};

const PlusBox = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.blue,
  })}
`;

export default NewButton;
