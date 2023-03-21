import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { CustomText } from "../../components/CustomText/CustomText";
import { ProductSlide } from "../../components/ProductSlide/ProductSlide";
import { themes } from "../../styles/themes";
import { datas } from "../../utils/data";

export function Products({ navigation }) {
  const {
    burgers,
    hotDogs,
    sandwichs,
    specialities,
    kids,
    adicionals,
    milkshakesAndSlushies,
    liquors,
    portions,
    watersAndJuicesAndSoftDrinks,
  } = datas;

  return (
    <ScrollView>
      <View style={[containerFontBox, primaryBackground]}>
        <ProductSlide type={burgers?.type} data={burgers?.data} />
        <ProductSlide type={kids?.type} data={kids?.data} />
        <ProductSlide type={specialities?.type} data={specialities?.data} />
        <ProductSlide type={hotDogs?.type} data={hotDogs?.data} />
        <ProductSlide type={sandwichs?.type} data={sandwichs?.data} />
        <ProductSlide type={adicionals?.type} data={adicionals?.data} />
        <ProductSlide
          type={milkshakesAndSlushies?.type}
          data={milkshakesAndSlushies?.data}
        />
        <ProductSlide type={liquors?.type} data={liquors?.data} />
        <ProductSlide
          type={watersAndJuicesAndSoftDrinks?.type}
          data={watersAndJuicesAndSoftDrinks?.data}
        />
        <ProductSlide type={portions?.type} data={portions?.data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
const { containerFontBox, primaryBackground } = themes;
