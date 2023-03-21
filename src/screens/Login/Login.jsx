import { StyleSheet, View } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { FormDataLogin } from "../../components/FormDataLogin/FormDataLogin";
import { CustomText } from "../../components/CustomText/CustomText";

export function Login({ navigation }) {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <CustomText style={[text4Xl, primaryColor]} fontF={"bold"}>
        Login
      </CustomText>
      <FormDataLogin />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor } = themes;
