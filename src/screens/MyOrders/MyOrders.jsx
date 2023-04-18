import { StyleSheet, View } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { Orders } from "../../components/Orders/Orders";

export function MyOrders({ navigation }) {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Orders />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground } = themes;
