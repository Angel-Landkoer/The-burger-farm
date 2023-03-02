import { StyleSheet } from "react-native";
import Constants from "expo-constants";

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

  // Border-Color
  primaryBorderColor: {
    // Moderate orange
    borderColor: "#CD973D",
  },
  secondaryBorderColor: {
    // Very dark grayish orange
    borderColor: "#54423A",
  },

  // Font-Size
  textXs: {
    fontSize: 12,
    lineHeight: 16,
  },
  textSm: {
    fontSize: 14,
    lineHeight: 20,
  },
  textBase: {
    fontSize: 16,
    lineHeight: 24,
  },
  textLg: {
    fontSize: 18,
    lineHeight: 28,
  },
  textXl: {
    fontSize: 20,
    lineHeight: 28,
  },
  text2Xl: {
    fontSize: 24,
    lineHeight: 32,
  },
  text3Xl: {
    fontSize: 30,
    lineHeight: 36,
  },
  text4Xl: {
    fontSize: 36,
    lineHeight: 40,
  },

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
  containerFontBox: {
    alignItems: "center",
    justifyContent: "center",

    padding: 20,
    width: "100%",
    marginVertical: Constants.statusBarHeight,
  },
});
