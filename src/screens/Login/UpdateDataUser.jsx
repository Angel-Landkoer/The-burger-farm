import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EditInfoGeneral } from "../../components/EditInfoGeneral/EditInfoGeneral.jsx";
import { themes } from "../../styles/themes";

export function UpdateDataUser() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Text style={[text4Xl, primaryColor, fontBold]}>Information Gerenal</Text>
      <EditInfoGeneral />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor, fontBold } =
  themes;
