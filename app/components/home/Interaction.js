import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import { Text } from "../../styles";

const Interaction = ({ active, activeIcon, number, unactiveIcon, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      {...{ onPress }}
    >
      <Container>
        {active ? (
          <Ionicons
            style={{ marginRight: 5 }}
            name={activeIcon}
            size={20}
            color={colors.red}
          />
        ) : (
          <Ionicons
            style={{ marginRight: 5 }}
            name={unactiveIcon}
            size={20}
            color={colors.text2}
          />
        )}
        {number && (
          <Text tiny {...{ active }}>
            {number}
          </Text>
        )}
      </Container>
    </Pressable>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default Interaction;
