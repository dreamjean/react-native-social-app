import { useRef } from "react";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import styled from "styled-components/native";

import { PaginationDot, SlideItem } from "../../components";
import { constants } from "../../config";
import slides from "../../data/slides";

const { width, height } = constants;

const OnBoardingScreen = () => {
  const x = useSharedValue(0);
  const scroll = useRef();

  const handleScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => (x.value = contentOffset.x),
  });

  const activeIndex = useDerivedValue(() => {
    return x.value / width;
  });

  const backgroundColor = useDerivedValue(() => {
    return interpolateColor(
      x.value,
      slides.map((_, index) => width * index),
      slides.map(({ backgroundColor }) => backgroundColor)
    );
  });

  return (
    <Container>
      <Animated.ScrollView
        ref={scroll}
        horizontal
        onScroll={handleScroll}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {slides.map((slide, index) => (
          <SlideItem
            key={`slide${index}`}
            image={slide.image}
            label={slide.label}
            last={index === slides.length - 1}
            subtitle={slide.subtitle}
            title={slide.title}
            onPress={() =>
              scroll.current.scrollTo({
                x: width * (index + 1),
                animated: true,
              })
            }
            {...{ x, index, backgroundColor }}
          />
        ))}
      </Animated.ScrollView>
      <Dots>
        {slides.map((_, index) => (
          <PaginationDot key={`dot${index}`} {...{ index, activeIndex }} />
        ))}
      </Dots>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const Dots = styled.View`
  flex-direction: row;
  height: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: ${height * 0.36}px;
`;

export default OnBoardingScreen;
