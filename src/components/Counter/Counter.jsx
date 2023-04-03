import React from "react";
import { StyleSheet, View } from "react-native";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";

export function Counter({ price, count, children }) {
  // function ubicado en el estado global al igual que el count-state

  const math = (price / 1000) * count;

  return (
    <View style={container}>
      <View style={contentCount}>{children}</View>
      <View style={contentPrice}>
        <CustomText
          style={[textPrice, text2Xl, secondaryColor]}
          fontF={"semiBold"}
        >
          {math && `${math}K`}
        </CustomText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    width: "80%",
  },
  contentCount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    width: "50%",
    marginHorizontal: 10,
  },
  contentPrice: {},
  textPrice: {},
});

const { container, contentPrice, contentCount, textPrice } = styles;

const {
  text2Xl,
  textBase,
  secondaryColor,
  quinaryColor,
  quaternaryColor,
  tertiaryColor,
} = themes;
