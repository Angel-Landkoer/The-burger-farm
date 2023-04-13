import React from "react";
import { StyleSheet, View } from "react-native";
import { EditInfoGeneral } from "../../components/EditInfoGeneral/EditInfoGeneral.jsx";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";

export function UpdateDataUser({ navigation, route }) {
  const { user } = route.params;
  const dataDefault = user;

  const goToBack = () => navigation.goBack();

  return (
    <View style={[containerFontBox, primaryBackground]}>
      <CustomText style={[text4Xl, primaryColor, textLeft]} fontF={"bold"}>
        Information Gerenal
      </CustomText>
      <EditInfoGeneral goToBack={goToBack} dataDefault={dataDefault} />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor, textLeft } =
  themes;
