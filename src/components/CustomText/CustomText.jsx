import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export function CustomText({ fontF, style, children }) {
  const [fontsLoaded] = useFonts({
    "Hind-Madurai": require("../../assets/font/Hind_Madurai/HindMadurai-Light.ttf"),
    "Hind-Madurai-Regular": require("../../assets/font/Hind_Madurai/HindMadurai-Regular.ttf"),
    "Hind-Madurai-Medium": require("../../assets/font/Hind_Madurai/HindMadurai-Medium.ttf"),
    "Hind-Madurai-SemiBold": require("../../assets/font/Hind_Madurai/HindMadurai-SemiBold.ttf"),
    "Hind-Madurai-Bold": require("../../assets/font/Hind_Madurai/HindMadurai-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  const renderFontFamily = (font) => {
    switch (font) {
      case "bold":
        return familyBold;

      case "semiBold":
        return familySemiBold;

      case "medium":
        return familyMedium;

      case "regular":
        return familyRegular;

      default:
        return familyDefault;
    }
  };

  return (
    <>
      <Text style={[style, renderFontFamily(fontF)]}>{children}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  familyBold: {
    fontFamily: "Hind-Madurai-Bold",
  },
  familySemiBold: {
    fontFamily: "Hind-Madurai-SemiBold",
  },
  familyMedium: {
    fontFamily: "Hind-Madurai-Medium",
  },
  familyRegular: {
    fontFamily: "Hind-Madurai-Regular",
  },
  familyDefault: {
    fontFamily: "Hind-Madurai",
  },
});

const {
  familyBold,
  familySemiBold,
  familyMedium,
  familyRegular,
  familyDefault,
} = styles;
