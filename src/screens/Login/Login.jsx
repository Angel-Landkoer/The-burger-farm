import { StyleSheet, View } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { FormDataLogin } from "../../components/FormDataLogin/FormDataLogin";
import { CustomText } from "../../components/CustomText/CustomText";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function Login({ navigation }) {
  const onRoute = () => navigation.navigate("SignUpStack");

  return (
    <View style={[container, primaryBackground]}>
      <CustomText style={[title, textCenter, primaryColor]} fontF={"bold"}>
        Login
      </CustomText>
      <FormDataLogin onRoute={onRoute} />
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

const { primaryBackground, primaryColor, textCenter } = themes;
