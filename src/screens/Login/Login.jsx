import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { FormDataLogin } from "../../components/FormDataLogin/FormDataLogin";

export function Login() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Text style={[text4Xl, fontBold, primaryColor]}>Login</Text>
      <FormDataLogin />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, fontBold, primaryColor } = themes;
