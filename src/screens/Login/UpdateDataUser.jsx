import React from "react";
import { StyleSheet, View } from "react-native";
import { EditInfoGeneral } from "../../components/EditInfoGeneral/EditInfoGeneral.jsx";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function UpdateDataUser({ navigation, route }) {
  const { user, userId } = route.params;
  const dataDefault = user;

  const goToBack = () => navigation.goBack();

  return (
    <View style={[container, primaryBackground]}>
      <CustomText style={[title, primaryColor, textLeft]} fontF={"bold"}>
        Information Gerenal
      </CustomText>
      <EditInfoGeneral
        userId={userId}
        goToBack={goToBack}
        dataDefault={dataDefault}
      />
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
    paddingVertical: pixelSizeVertical(5),
  },
});

const { container, title } = styles;

const { primaryBackground, primaryColor, textLeft } = themes;
