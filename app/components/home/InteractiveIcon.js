import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";

import { colors } from "../../config";
import { Text } from "../../styles";

const InteractiveIcon = ({ icon, number }) => {
  return (
    <Container>
      <Ionicons
        style={{ marginRight: 5 }}
        name={icon}
        size={24}
        color={colors.text2}
      />
      {number && <Text>{number}</Text>}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default InteractiveIcon;
