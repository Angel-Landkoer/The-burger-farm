import React from "react";
import { StyleSheet, View } from "react-native";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import { fontPixel } from "../../styles/normalize";

export function Counter({ price, count, children }) {
  const math = (price / 1000) * count;

  return (
    <View style={container}>
      <View style={contentCount}>{children}</View>
      <View style={contentPrice}>
        <CustomText style={[textPrice, secondaryColor]} fontF={"semiBold"}>
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
  textPrice: {
    fontSize: fontPixel(15),
  },
});

const { container, contentPrice, contentCount, textPrice } = styles;

const { secondaryColor, quinaryColor, quaternaryColor, tertiaryColor } = themes;
