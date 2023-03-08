import { ScrollView, StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { themes } from "../../styles/themes";
import { datas } from "../../utils/data";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import { RenderList } from "../../components/RenderList/RenderList";
import { CustomText } from "../../components/CustomText/CustomText";

export function MyCart({ screens, setScreens }) {
  // datos filtrado de selecction -- falta hacer en el estado global
  const { burgers } = datas;

  return (
    <ScrollView>
      <StatusBar style="light" backgroundColor="black" />
      <View style={[containerFontBox, primaryBackground]}>
        <View
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
        </View>
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
