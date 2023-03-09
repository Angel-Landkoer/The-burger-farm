import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";

export function DataCard({ data }) {
  const { name, price } = data;

  return (
    <View style={container}>
      <CustomText
        style={[nameText, textSm, primaryColor, textCenter]}
        fontF={"bold"}
      >
        {name}
      </CustomText>
      <Image
        style={[img, secondaryBorderColor]}
        source={{ uri: "http://www.smashbros.com/images/og/pikachu.jpg" }}
      />
      <CustomText
        style={[priceText, textLg, secondaryColor]}
        fontF={"semiBold"}
      >
        ${price / 1_000}k
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    marginHorizontal: 8,
    paddingVertical: 10,
  },

  priceText: {
    marginTop: 7,
  },
  nameText: { marginBottom: 7, width: "90%" },
  img: {
    width: 100,
    height: 100,

    borderWidth: 1.2,
  },
});

const { container, img, nameText, priceText } = styles;

const {
  textSm,
  textCenter,
  textLg,
  primaryColor,
  secondaryColor,
  secondaryBorderColor,
} = themes;
