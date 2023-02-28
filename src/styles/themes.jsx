import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const themes = StyleSheet.create({
  // Color
  primaryColor: {
    color: "#54423A",
  },
  secondaryColor: {
    color: "#CD973D",
  },
  tertiaryColor: {
    color: "#666666",
  },
  quaternaryColor: {
    color: "#4CD964",
  },
  // Backgorund Color
  primaryBackground: {
    backgroundColor: "#EBEBEB",
  },
  secondaryBackground: {
    color: "#CD973D",
  },

  // Border-Color
  primaryBorderColor: {
    borderColor: "#CD973D",
  },
  secondaryBorderColor: {
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
