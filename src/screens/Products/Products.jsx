import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ProductSlide } from "../../components/ProductSlide/ProductSlide";
import { data } from "../../utils/data";

export function Products() {
  const { type } = data;
  const { burgers, hotDogs, sandwichs, specialities, kids, adicionals } = type;

  return (
    <ScrollView>
      <View style={container}>
        <ProductSlide type={`BURBER`} data={burgers} />
        <ProductSlide type={`KIDS`} data={kids} />
        <ProductSlide type={`SPECIALITIES`} data={specialities} />
        <ProductSlide type={`HOT DOG`} data={hotDogs} />
        <ProductSlide type={`SANDWICHS`} data={sandwichs} />
        <ProductSlide type={`ADICIONALS`} data={adicionals} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", padding: 20 },
});

const { container } = styles;
