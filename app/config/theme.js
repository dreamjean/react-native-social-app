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
  fonts: [
    "Kufam-SemiBoldItalic",
    "Lato-Bold",
    "Lato-BoldItalic",
    "Lato-Italic",
    "Lato-Regular",
  ],
  size: {
    s1: 11,
    s2: 12,
    s3: 14,
    m1: 16,
    m2: 18,
    l: 22,
    xl: 28,
  },
  space: {
    s1: 5,
    s2: 10,
    m1: 16,
    m2: 20,
    l1: 64,
  },
  radii: {
    s1: 3,
    m: 30,
    l: 40,
    l2: 64,
    xxl: 100,
  },
};
