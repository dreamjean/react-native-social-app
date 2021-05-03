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
          <Button
            title="Save"
            bgColor={colors.blue}
            color={colors.white}
            width={126}
            onPress={onSave}
          />

          <Button
            title="Don't save"
            bgColor={colors.blue}
            color={colors.white}
            width={126}
            onPress={onUnsave}
          />
        </Box>
        <CancleBox>
          <Button
            title="cancle"
            borderColor={colors.transparent}
            color={colors.blue}
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
    backgroundColor: colors.green,
    borderTopLeftRadius: radii.m2,
    borderTopRightRadius: radii.m2,
  })}
`;

const Box = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  ${({ theme: { space } }) => ({
    margin: space.m2,
    marginBottom: 0,
  })}
`;

const CancleBox = styled.View`
  align-items: center;
`;

export default DraftModal;
