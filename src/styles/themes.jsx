import { StyleSheet } from "react-native";
import {
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  widthPixel,
  heightPixel,
} from "./normalize";
// import Constants from "expo-constants";

export const themes = StyleSheet.create({
  // Color
  primaryColor: {
    // Very dark grayish orange
    color: "#54423A",
  },
  secondaryColor: {
    // Moderate orange
    color: "#CD973D",
  },
  tertiaryColor: {
    // Very dark gray
    color: "#666666",
  },
  quaternaryColor: {
    // Soft lime green
    color: "#4CD964",
  },
  quinaryColor: {
    // Vivid red
    color: "#ff3b30",
  },
  senaryColor: {
    color: "#FFFFFF",
  },

  // Backgorund Color
  primaryBackground: {
    // Very light gray.
    backgroundColor: "#EBEBEB",
  },
  secondaryBackground: {
    // Moderate orange
    backgroundColor: "#CD973D",
  },
  tertiaryBackground: {
    // Soft lime green
    backgroundColor: "#4CD964",
  },
  quaternaryBackground: {
    // Vivid red
    backgroundColor: "#ff3b30",
  },
  quinaryBackground: {
    // Strong blue.
    backgroundColor: "#0275D8",
  },
  // octonary nonary denary
  senaryBackground: {
    // Dark moderate cyan - lime green.
    backgroundColor: "#36846B",
  },

  septenaryBackground: {
    // Moderate cyan
    backgroundColor: "#4bb39a",
  },

  // Border-Color
  primaryBorderColor: {
    // Moderate orange
    borderColor: "#CD973D",
  },
  secondaryBorderColor: {
    // Very dark grayish orange
    borderColor: "#54423A",
  },

  tertiaryBorderColor: {
    // Very dark gray
    borderColor: "#666666",
  },

  // // Font-Size

  // text-weight
  fontNormal: { fontWeight: "400" },
  fontMedium: { fontWeight: "500" },
  fontSemiBold: { fontWeight: "600" },
  fontBold: { fontWeight: "700" },

  // text-align
  textLeft: { textAlign: "left" },
  textCenter: { textAlign: "center" },
  textRight: { textAlign: "right" },
  textJustify: { textAlign: "justify" },

  // styles-Screens
});
