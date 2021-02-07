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
  getFont,
  size: {
    s1: 11,
    s2: 12,
    s3: 13,
    m1: 14,
    m2: 16,
    l: 24,
    xl: 32,
  },
  space: {
    s1: 6,
    s2: 12,
    m1: 32,
    l1: 64,
  },
  radii: {
    s1: 6,
    xxl: 100,
  },
};
