import React from "react";
import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import { CustomText } from "../../components/CustomText/CustomText";
import { ProductSlide } from "../../components/ProductSlide/ProductSlide";
import { themes } from "../../styles/themes";
import { datas } from "../../utils/data";

export function Products({ screens, setScreens }) {
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
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "80%",
          }}
        >
          <Pressable
            onPress={() =>
              setScreens({
                ...screens,
                home: true,
                cart: false,
                data: false,
                orders: false,
                findUs: false,
              })
            }
          >
            <CustomText fontF={"medium"}>Home</CustomText>
          </Pressable>
          <Pressable
            onPress={() =>
              setScreens({
                ...screens,
                home: false,
                cart: true,
                data: false,
                orders: false,
                findUs: false,
              })
            }
          >
            <CustomText fontF={"medium"}>Cart</CustomText>
          </Pressable>
          <Pressable
            onPress={() =>
              setScreens({
                ...screens,
                home: false,
                cart: false,
                data: true,
                orders: false,
                findUs: false,
              })
            }
          >
            <CustomText fontF={"medium"}>Data</CustomText>
          </Pressable>
          <Pressable
            onPress={() =>
              setScreens({
                ...screens,
                home: false,
                cart: false,
                data: false,
                orders: true,
                findUs: false,
              })
            }
          >
            <CustomText fontF={"medium"}>Orders</CustomText>
          </Pressable>
          <Pressable
            onPress={() =>
              setScreens({
                ...screens,
                home: false,
                cart: false,
                data: false,
                orders: false,
                findUs: true,
              })
            }
          >
            <CustomText fontF={"medium"}>FindUs</CustomText>
          </Pressable>
        </View> */}
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
