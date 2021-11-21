import { useNavigation } from "@react-navigation/native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import styled from "styled-components/native";

import { colors, constants } from "../../config";
import routes from "../../navigation/routes";
import { Image, Text } from "../../styles";
import Button from "../Button";

const { width, height } = constants;

const SlideItem = ({
  backgroundColor,
  image,
  index,
  last,
  label,
  onPress,
  subtitle,
  title,
  x,
}) => {
  const navigation = useNavigation();

  const imageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      x.value,
      [width * (index - 0.5), width * index, width * (index + 0.5)],
      [0, 1, 0],
      Extrapolate.CLAMP
    );
    return {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      opacity,
    };
  });

  const outterStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <AnimatedContainer style={outterStyle}>
      <Animated.View style={imageStyle}>
        <Image boarding resizeMode="contain" source={image} />
      </Animated.View>
      <Footer>
        <TextBox>
          <Text title3>{title}</Text>
          <Text description marginTop={15}>
            {subtitle}
          </Text>
        </TextBox>
        {last ? (
          <Box>
            <Button
              title={label}
              bgColor={colors.lightBlue2}
              width={260}
              color={colors.white}
              onPress={() => navigation.navigate(routes.SIGNIN)}
            />
          </Box>
        ) : (
          <ButtonsBox>
            <Button
              title="skip"
              bgColor={colors.lightWhite}
              color={colors.lightBlue2}
              onPress={() => navigation.navigate(routes.SIGNIN)}
            />
            <Button
              title={label}
              bgColor={colors.lightBlue2}
              color={colors.white}
              {...{ onPress }}
            />
          </ButtonsBox>
        )}
      </Footer>
    </AnimatedContainer>
  );
};

const Container = styled.View`
  width: ${width}px;
  align-items: center;

  ${({ theme: { space } }) => ({
    paddingTop: space.l1,
  })}
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Footer = styled.View`
  height: ${height * 0.35}px;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
`;

const TextBox = styled.View`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const ButtonsBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${({ theme: { space } }) => ({
    padding: space.m3,
    marginBottom: space.m2,
  })}
`;

const Box = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;

  ${({ theme: { space } }) => ({
    padding: space.m3,
    marginBottom: space.m2,
  })}
`;

export default SlideItem;
