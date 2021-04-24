import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Button, Icon, ImageInputList } from "../components";
import { calender, colors, images } from "../config";
import { Image } from "../styles";

const { KEYBOARD_HEIGHT } = calender;

const CreatePostScreen = ({ navigation, route }) => {
  const data = route?.params?.data;
  const [value, setValue] = useState("");
  const [selectImages, setSelectImages] = useState([]);

  useEffect(() => {
    if (data) setSelectImages(data);
  }, [data]);

  return (
    <Container>
      <Header>
        <Icon name="chevron-left" size={50} color={colors.grey} />
        <Button
          title="Post"
          color={colors.blue}
          backgroundColor="transparent"
          padding={12}
          margin={6}
          onPress={() => navigation.navigate("MediaSelection")}
        />
      </Header>
      <InputWrapper>
        <Image avatar source={images[4]} />
        <Input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          placeholder="Want to share something..."
          multiline
          numberOfLines={4}
          values={value}
          onChangeText={() => setValue(value)}
        />
      </InputWrapper>
      <ImagesWrapper>
        <ImageInputList
          images={selectImages}
          onRemoveImage={(uri) =>
            setSelectImages(selectImages.fileter((img) => img.uri !== uri))
          }
        />
      </ImagesWrapper>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;

  ${({ theme: { colors, space } }) => ({
    borderColor: colors.grey,
    paddingTop: space.m1,
  })}
`;

const InputWrapper = styled.View`
  flex: 1;
  flex-direction: row;

  ${({ theme: { space } }) => ({
    padding: space.m1,
  })}
`;

const Input = styled.TextInput`
  flex: 1;
  line-height: 26px;
  ${({ theme: { size, fonts, colors, space } }) => ({
    fontSize: size.m1,
    fontFamily: fonts[4],
    color: colors.dark,
    marginLeft: space.s3,
  })}
`;

const ImagesWrapper = styled.View`
  position: absolute;
  bottom: ${KEYBOARD_HEIGHT}px;
  left: 20px;
`;

export default CreatePostScreen;