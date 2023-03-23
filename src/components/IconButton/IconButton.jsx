import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";

export function IconButton() {
  const { goBack } = useNavigation();
  const goToBack = () => goBack();

  return (
    <Pressable onPress={goToBack}>
      <MaterialCommunityIcons
        name="arrow-left-circle"
        size={44}
        color={primaryColor.color}
      />
    </Pressable>
  );
}

const { primaryColor } = themes;
