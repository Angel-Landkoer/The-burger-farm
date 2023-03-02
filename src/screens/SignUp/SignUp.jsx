import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FormDataSignUp } from "../../components/FormDataSignUp/FormDataSignUp";
import { themes } from "../../styles/themes";

export function SignUp() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Text style={[text4Xl, fontBold, primaryColor]}>SignUp</Text>
      <FormDataSignUp />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, fontBold, text4Xl, primaryColor } = themes;
