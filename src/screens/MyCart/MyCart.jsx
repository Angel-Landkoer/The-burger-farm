import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { themes } from "../../styles/themes";
import { datas } from "../../utils/data";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import { RenderList } from "../../components/RenderList/RenderList";

export function MyCart() {
  // datos filtrado de selecction -- falta hacer en el estado global
  const { burgers } = datas;

  return (
    <ScrollView>
      <StatusBar style="light" backgroundColor="black" />
      <View style={[containerFontBox, primaryBackground]}>
        <RenderList
          data={burgers.data}
          component={(item) => <CartProduct data={item.item} />}
          stringKey={(item) => `CartItem-${item.name}`}
          horizontal={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
const {} = styles;

const { containerFontBox, primaryBackground } = themes;
