import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import { Text } from "../../styles";

const Interaction = ({ active = false, icon, number, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
      {...{ onPress }}
    >
      <Container>
        <MaterialCommunityIcons
          style={{ marginRight: 5 }}
          name={icon}
          size={22}
          color={active ? colors.red : colors.text2}
        />
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
