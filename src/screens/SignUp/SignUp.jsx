import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";
import { FormDataSignUp } from "../../components/FormDataSignUp/FormDataSignUp";
import {
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize";

export function SignUp({ navigation }) {
  const goToBack = () => navigation.goBack();

  return (
    <View style={[container, primaryBackground]}>
      <StatusBar style="light" backgroundColor="black" />
      <CustomText style={[title, primaryColor]} fontF={"bold"}>
        Register Your Data
      </CustomText>
      <FormDataSignUp goToBack={goToBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: heightPixel(480),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  title: {
    fontSize: fontPixel(20),
    paddingVertical: pixelSizeVertical(3),
  },
});

const { container, title } = styles;

const { primaryBackground, primaryColor } = themes;
