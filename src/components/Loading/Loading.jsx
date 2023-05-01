import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export function Loading({ styleContainer, color }) {
  return (
    <View style={[styleContainer, container]}>
      <ActivityIndicator style={loading} size={"large"} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    width: "100%",
  },
});

const { container, loading } = styles;
