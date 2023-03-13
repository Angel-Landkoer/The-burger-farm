import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { CustomText } from "../../components/CustomText/CustomText";
import { themes } from "../../styles/themes";
import { Orders } from "../../components/Orders/Orders";

export function MyOrders({ navigation }) {
  return (
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
      <CustomText style={[text4Xl, primaryColor]} fontF={"bold"}>
        My Orders
      </CustomText>
      {/* Usuario no registrado no pasa se redireccion a Login */}

      <Orders />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor } = themes;
