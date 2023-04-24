import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../styles/themes";
import { Orders } from "../../components/Orders/Orders";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function MyOrders({ navigation }) {
  const orders = useSelector((state) => state.data.orders);

  return (
    <View style={[container, primaryBackground]}>
      <Orders orders={orders} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: heightPixel(480),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
});

const { container } = styles;

const { primaryBackground } = themes;
