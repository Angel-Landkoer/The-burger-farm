import React from "react";
import { StyleSheet, View } from "react-native";
import { EditInfoGeneral } from "../../components/EditInfoGeneral/EditInfoGeneral.jsx";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";

export function UpdateDataUser() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <CustomText style={[text4Xl, primaryColor , textLeft]} fontF={"bold"}>
        Information Gerenal
      </CustomText>
      <EditInfoGeneral />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor, textLeft } = themes;
