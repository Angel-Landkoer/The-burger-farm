import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export function Loading({ color }) {
  return (
    <View style={container}>
      <ActivityIndicator style={loading} size={"large"} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
  },
  loading: {
    width: "100%",
  },
});

const { container, loading } = styles;
