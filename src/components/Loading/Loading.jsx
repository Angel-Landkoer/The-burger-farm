import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function Loading({ color }) {
  return (
    <View style={container}>
      <ActivityIndicator style={loading} size={"large"} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    minWidth: widthPixel(100),
    width: widthPixel(150),
    minHeight: heightPixel(100),
    height: heightPixel(150),
  },
  loading: {
    width: "100%",
  },
});

const { container, loading } = styles;
