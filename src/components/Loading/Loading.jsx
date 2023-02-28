import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

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

    width: 150,
    height: 150,
  },
  loading: {
    width: "100%",
  },
});

const { container, loading } = styles;
