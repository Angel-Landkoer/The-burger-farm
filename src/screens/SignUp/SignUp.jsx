import { StyleSheet, View } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";
import { FormDataSignUp } from "../../components/FormDataSignUp/FormDataSignUp";

export function SignUp() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <CustomText style={[text4Xl, primaryColor]} fontF={"bold"}>
        SignUp
      </CustomText>
      <FormDataSignUp />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor } = themes;
