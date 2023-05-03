import React from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";

export function IconButton({ callback }) {

  return (
    <Pressable onPress={callback}>
      <MaterialCommunityIcons
        name="arrow-left-circle"
        size={44}
        color={primaryColor.color}
      />
    </Pressable>
  );
}

const { primaryColor } = themes;
