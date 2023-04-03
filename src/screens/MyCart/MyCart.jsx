import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { Cart } from "../../components/Cart/Cart";
import { themes } from "../../styles/themes";

export function MyCart({ navigation }) {
  return (
    <View style={[containerFontBox, primaryBackground, container]}>
      <Cart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height / 1.12,
  },
});

const { container } = styles;

const { containerFontBox, primaryBackground } = themes;
