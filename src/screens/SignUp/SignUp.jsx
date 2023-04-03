import { StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";
import { FormDataSignUp } from "../../components/FormDataSignUp/FormDataSignUp";

export function SignUp({ navigation }) {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <StatusBar style="light" backgroundColor="black" />
      <CustomText style={[text4Xl, primaryColor]} fontF={"bold"}>
        Register Your Data
      </CustomText>
      <FormDataSignUp />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor } = themes;
