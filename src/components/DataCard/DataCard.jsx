import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export function DataCard({ data }) {
  const { name, description, price } = data;

  return (
    <View style={container}>
      <Text style={nameText}>{name}</Text>
      <Image
        style={img}
        source={{ uri: "http://www.smashbros.com/images/og/pikachu.jpg" }}
      />
      <Text style={priceText}>${price / 1_000}k</Text>
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
  text: {
    fontSize: 13,
    fontWeight: "400",
  },
  priceText: {
    fontSize: 15,
    fontWeight: "600",
  },
  nameText: { fontSize: 13, fontWeight: "500" },
  img: {
    width: 100,
    height: 100,
  },
});

const { container, text, img, nameText, priceText } = styles;
