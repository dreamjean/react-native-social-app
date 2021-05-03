import LottieView from "lottie-react-native";
import React from "react";
import * as Progress from "react-native-progress";
import styled from "styled-components";

const UploadModal = ({
  visible = false,
  uploadState,
  onDone,
  progress = 0,
}) => {
  return (
    <Modal {...{ visible }}>
      <Container>
        {uploadState === "uploading" ? (
          <Progress.Bar progress={progress} width={200} color="#0073ff" />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../../assets/animations/done.json")}
            style={{ width: 150 }}
          />
        )}
      </Container>
    </Modal>
  );
};

const Modal = styled.Modal``;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default UploadModal;
