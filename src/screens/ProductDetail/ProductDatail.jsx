import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Detail } from "../../components/Detail/Detail";
import { data } from "../../utils/data";

export function ProductDatail() {
  const { type } = data;
  const { burgers } = type;
  const dataObject = burgers[4];

  return (
    <View style={container}>
      <Detail data={dataObject} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
  },
});

const { container } = styles;
