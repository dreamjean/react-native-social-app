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
        {images.map(({ uri, id }) => (
          <ImageInput
            key={id}
            imageUri={uri}
            onRemoveImage={() => onRemoveImage(uri)}
          />
        ))}
        <ImageInput />
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
`;

const ScrollView = styled.ScrollView``;

export default ImageInputList;
