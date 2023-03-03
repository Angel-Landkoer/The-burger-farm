import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";

export function ButtonSaveClose({ onSaveData }) {
  return (
    <View style={[container]}>
      <TouchableOpacity
        style={[touchBtn, touchBtnCancel, quaternaryBackground]}
        onPress={() => console.warn("redirecton")}
      >
        <MaterialCommunityIcons
          name="close-circle"
          size={24}
          color={senaryColor.color}
        />
        <Text style={[btnText, btnTextCancel, senaryColor, textSm]}>
          Cancel
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[touchBtn, touchSave, tertiaryBackground]}
        onPress={() => console.warn("Save data")}
      >
        <FontAwesome5 name="save" size={24} color={senaryColor.color} />

        <Text style={[btnText, btnTextSave, senaryColor, textSm]}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    width: 300,
  },
  touchBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    padding: 2,

    borderRadius: 20,
  },
  touchBtnCancel: {
    width: 100,
  },
  touchSave: {
    width: 150,
  },
  btnText: {
    padding: 5,
  },
  btnTextCancel: {},
  btnTextSave: {
    marginHorizontal: 10,
  },
});

const {
  container,
  touchBtn,
  btnText,
  touchBtnCancel,
  touchSave,
  btnTextCancel,
  btnTextSave,
} = styles;

const { senaryColor, quaternaryBackground, tertiaryBackground, textSm } =
  themes;
