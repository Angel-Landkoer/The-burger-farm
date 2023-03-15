import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { CustomText } from "../../components/CustomText/CustomText";
import { themes } from "../../styles/themes";

export function FindUs({ navigation }) {
  return (
    <View style={[primaryBackground, containerFontBox]}>
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
      <CustomText style={[text4Xl, textCenter, primaryColor]} fontF={"bold"}>
        Map
      </CustomText>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const {
  text4Xl,
  textCenter,
  primaryBackground,
  primaryColor,
  containerFontBox,
} = themes;
