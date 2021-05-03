import React, { useRef } from "react";
import styled from "styled-components";

import ImageInput from "./ImageInput";

const ImageInputList = ({ images = [], onRemoveImage }) => {
  const scrollView = useRef();

  return (
    <Container>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        showsHorizontalScrollIndicator={false}
      >
        {images.map(({ uri }) => (
          <ImageInput
            key={uri}
            imageUri={uri}
            onRemoveImage={() => onRemoveImage(uri)}
          />
        ))}
        {images.length !== 0 && <ImageInput />}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

const ScrollView = styled.ScrollView``;

export default ImageInputList;
