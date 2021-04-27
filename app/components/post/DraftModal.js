import React from "react";
import { Modal } from "react-native";
import styled from "styled-components";

import { colors } from "../../config";
import Button from "../Button";

function DraftModal({ visible, onSave, onUnsave, onCloseModal }) {
  return (
    <Modal {...{ visible }} animationType="slide" transparent>
      <Container>
        <Box>
          <Button title="Save" width={120} onPress={onSave} />

          <Button title="Unsave" width={120} onPress={onUnsave} />
        </Box>
        <CancleBox>
          <Button
            title="cancle"
            backgroundColor="transparent"
            color={colors.blue}
            margin={4}
            onPress={onCloseModal}
          />
        </CancleBox>
      </Container>
    </Modal>
  );
}

const Container = styled.View`
  width: 100%;
  height: 135px;
  position: absolute;
  bottom: 0;
  justify-content: flex-end;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.light,
    borderTopLeftRadius: radii.m2,
    borderTopRightRadius: radii.m2,
  })}
`;

const Box = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${({ theme: { space } }) => ({
    padding: space.m3,
  })}
`;

const CancleBox = styled.View`
  justify-content: center;
`;

export default DraftModal;
