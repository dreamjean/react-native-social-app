import { Modal } from "react-native";
import styled from "styled-components/native";

import { colors } from "../../config";
import { Text } from "../../styles";
import Button from "../Button";
import Icon from "../Icon";

function OperationModal({ visible, onDelete, onCloseModal }) {
  return (
    <Modal {...{ visible }} animationType="slide" transparent>
      <Container>
        <Box>
          <Wrapper>
            <Icon
              name="trash-can-outline"
              size={50}
              backgroundColor={colors.light2}
              color={colors.grey2}
              onPress={onDelete}
            />
            <Text medium marginTop={5} style={{ color: colors.grey2 }}>
              delete
            </Text>
          </Wrapper>
        </Box>
        <Seperator />
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
  height: 180px;
  position: absolute;
  bottom: 0;
  justify-content: flex-end;

  ${({ theme: { colors, radii } }) => ({
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.m2,
    borderTopRightRadius: radii.m2,
  })}
`;

const Box = styled.View`
  flex-direction: row;
  align-items: center;

  ${({ theme: { space } }) => ({
    margin: space.m2,
  })}
`;

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;

  ${({ theme: { space } }) => ({
    padding: space.s1,
    marginRight: space.m1,
  })}
`;

const Seperator = styled.View`
  width: 100%;
  height: 6px;

  ${({ theme: { colors } }) => ({
    backgroundColor: colors.grey,
  })}
`;

const CancleBox = styled.View`
  align-items: center;
  justify-content: center;
  height: 55px;
`;

export default OperationModal;
