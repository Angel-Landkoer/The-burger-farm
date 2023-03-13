import React from "react";
import { ScrollView, StyleSheet, View, Pressable } from "react-native";
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "80%",
          }}
        >
          <Pressable onPress={() => navigation.navigate("Products")}>
            <CustomText fontF={"medium"}>Home</CustomText>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("MyCart")}>
            <CustomText fontF={"medium"}>Cart</CustomText>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("MyData")}>
            <CustomText fontF={"medium"}>Data</CustomText>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("MyOrders")}>
            <CustomText fontF={"medium"}>Orders</CustomText>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("FindUs")}>
            <CustomText fontF={"medium"}>FindUs</CustomText>
          </Pressable>
        </View>
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
