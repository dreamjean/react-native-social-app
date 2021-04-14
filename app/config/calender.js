import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ROW_HEIGHT = height / 15;
const KEYBOARD_HEIGHT = height * 0.4;

export default {
  width,
  height,
  ROW_HEIGHT,
  KEYBOARD_HEIGHT,
};
