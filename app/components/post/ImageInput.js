import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import styled from "styled-components/native";

import { colors } from "../../config";
import routes from "../../navigation/routes";
import { Image } from "../../styles";
import Icon from "../Icon";

const ImageInput = ({ imageUri, onRemoveImage }) => {
  const navigation = useNavigation();

  return (
    <Container>
      {imageUri && (
        <>
          <Image resizeMode="contain" source={{ uri: imageUri }} />
          <Icon
            onPress={onRemoveImage}
            name="close"
            size={22}
            backgroundColor={colors.lightBlue2}
            style={{
              position: "absolute",
              top: 5,
              right: 5,
            }}
          />
        </>
      )}
      {!imageUri && (
        <Pressable
          style={({ pressed }) => ({
            backgroundColor: pressed ? colors.lightBlue2 : "transparent",
            width: "100%",
            height: "100%",
            opacity: pressed ? 0.5 : 1,
            alignItems: "center",
            justifyContent: "center",
          })}
          onPress={() => navigation.navigate(routes.MEDIA_SELECTION)}
        >
          <MaterialCommunityIcons name="plus" size={50} color={colors.medium} />
        </Pressable>
      )}
    </Container>
  );
};

const Container = styled.View`
  overflow: hidden;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;

  ${({ theme: { colors, space, radii } }) => ({
    borderRadius: radii.s2,
    background: colors.light,
    marginBottom: space.s2,
    marginLeft: space.s3,
  })}
`;

export default ImageInput;
