import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import {
  widthPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function ButtonSaveClose({ onSaveData, onGoToBack }) {
  return (
    <View style={[container]}>
      <TouchableOpacity
        style={[touchBtn, touchBtnCancel, quaternaryBackground]}
        onPress={onGoToBack}
      >
        <MaterialCommunityIcons
          name="close-circle"
          size={24}
          color={senaryColor.color}
        />
        <CustomText style={[btnText, senaryColor]} fontF={"bold"}>
          Cancel
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[touchBtn, touchBtnSave, tertiaryBackground]}
        onPress={onSaveData}
      >
        <FontAwesome5 name="save" size={24} color={senaryColor.color} />
        <CustomText style={[btnText, btnTextSave, senaryColor]} fontF={"bold"}>
          Save
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    minWidth: 200,
    width: widthPixel(250),
  },
  touchBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    paddingVertical: pixelSizeVertical(3),
    paddingHorizontal: pixelSizeHorizontal(10),

    borderRadius: 30,
  },
  touchBtnCancel: {
    minWidth: 110,
    width: widthPixel(110),
  },
  touchBtnSave: {
    minWidth: 130,
    width: widthPixel(130),
  },
  btnText: {
    paddingVertical: pixelSizeVertical(3),
    paddingHorizontal: pixelSizeHorizontal(3),

    fontSize: fontPixel(11),
  },
  btnTextCancel: {},
  btnTextSave: {
    marginHorizontal: pixelSizeHorizontal(5),
  },
});

const {
  container,
  touchBtn,
  btnText,
  touchBtnCancel,
  touchBtnSave,
  btnTextSave,
} = styles;

const { senaryColor, quaternaryBackground, tertiaryBackground } = themes;
