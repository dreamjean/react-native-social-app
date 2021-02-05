import { Platform } from "react-native";

import colors from "./colors";

export const isIos = Platform.OS === "ios";

const getFont = (n) => (isIos ? fonts.ios[n] : fonts.android[n]);

const fonts = {
  ios: ["Proxima-Nova-Bold", "Proxima-Nova-Sbold", "Proxima-Nova-Reg"],
  android: ["Montserrat-Bold", "Montserrat-SemiBold", "Montserrat-Regular"],
};

export default {
  colors,
  size: {
    s1: 11,
    s2: 13,
    s3: 14,
    m: 16,
    l: 24,
    xl: 32,
  },
  space: {},
  radii: {
    xxl: 100,
  },
  getFont,
};
