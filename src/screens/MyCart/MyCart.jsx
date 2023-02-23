import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import { data } from "../../utils/data";

export function MyCart() {
  const { type } = data;
  const { burgers } = type;

  return (
    <ScrollView>
      <View style={container}>
        <Text>MyCart</Text>
        <FlatList
          data={burgers}
          renderItem={(item) => <CartProduct data={item.item} />}
          keyExtractor={(item) => `cartItem-${item.name}`}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    padding: 20,
    marginVertical: 15,
  },
});

const { container } = styles;
