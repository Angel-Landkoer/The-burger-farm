import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { CustomText } from "../../components/CustomText/CustomText";

export function FindUs({ navigation }) {
  return (
    <View>
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
      <CustomText fontF={"regular"}>FindUs</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
