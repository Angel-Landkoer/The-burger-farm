import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { themes } from "../../styles/themes";
import { Orders } from "../../components/Orders/Orders";

export function MyOrders({ navigation }) {
  const orders = useSelector((state) => state.data.orders);

  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Orders orders={orders} />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground } = themes;
