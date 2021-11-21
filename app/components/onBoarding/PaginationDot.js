import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { colors } from "../../config";

const PaginationDot = ({ index, activeIndex }) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [0.35, 0.65, 0.35],
      Extrapolate.CLAMP
    );
    const width = interpolate(
      activeIndex.value,
      [index - 1, index, index + 1],
      [15, 30, 15],
      Extrapolate.CLAMP
    );
    return {
      backgroundColor: colors.blue,
      width,
      height: 10,
      borderRadius: 3,
      opacity,
      margin: 4,
    };
  });

  return <Animated.View style={style} />;
};

export default PaginationDot;
