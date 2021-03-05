import { Platform } from "react-native";

import colors from "./colors";

export const isIos = Platform.OS === "ios";

export default {
  colors,
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
    s3: 12,
    m1: 16,
    m2: 20,
    l1: 64,
    l2: 70,
  },
  radii: {
    s1: 3,
    s2: 10,
    m1: 25,
  },
};
