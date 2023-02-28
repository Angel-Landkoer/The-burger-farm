import React from "react";
import { themes } from "../../themes";
import { datas } from "../../utils/data";
import { StatusBar } from "expo-status-bar";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

export function MyCart() {
  // datos filtrado de selecction -- falta hacer en el estado global
  const { burgers } = datas;

  return (
    <ScrollView>
      <StatusBar style="light" backgroundColor="black" />
      <View style={[containerFontBox, primaryBackground]}>
        <FlatList
          data={burgers.data}
          renderItem={(item) => <CartProduct data={item.item} />}
          keyExtractor={(item) => `cartItem-${item.name}`}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
const {} = styles;

const { containerFontBox, primaryBackground } = themes;
