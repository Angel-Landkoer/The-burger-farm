import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

export function Loading({ color }) {
  return (
    <View>
      <ActivityIndicator size={"large"} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
