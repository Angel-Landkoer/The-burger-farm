import { StyleSheet, View } from "react-native";
import React from "react";
import { CustomText } from "../../components/CustomText/CustomText";
import { themes } from "../../styles/themes";

export function FindUs({ navigation }) {
  return (
    <View style={[primaryBackground]}>
      <CustomText style={[textCenter, primaryColor]} fontF={"bold"}>
        Map
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { textCenter, primaryBackground, primaryColor } = themes;
