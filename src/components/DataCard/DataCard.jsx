import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { themes } from "../../themes";

export function DataCard({ data }) {
  const { name, description, price } = data;

  return (
    <View style={container}>
      <Text style={[nameText, textSm, fontMedium, primaryColor]}>{name}</Text>
      <Image
        style={[img, secondaryBorderColor]}
        source={{ uri: "http://www.smashbros.com/images/og/pikachu.jpg" }}
      />
      <Text style={[priceText, fontSemiBold, textLg, secondaryColor]}>
        ${price / 1_000}k
      </Text>
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
  nameText: { marginBottom: 7 },
  img: {
    width: 100,
    height: 100,

    borderWidth: 1.2,
  },
});

const { container, img, nameText, priceText } = styles;

const {
  textSm,
  fontMedium,
  fontSemiBold,
  textLg,
  primaryColor,
  secondaryColor,
  secondaryBorderColor,
} = themes;
