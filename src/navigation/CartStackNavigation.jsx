import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "../components/IconButton/IconButton";
import { MyCart } from "../screens/MyCart/MyCart";
import { ProductDetail } from "../screens/ProductDetail/ProductDetail";
import { themes } from "../styles/themes";

export function CartStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerStyle: [primaryBackground, headerContain],
        headerTitleAlign: "center",
        headerTitleStyle: [primaryColor, text3Xl, fontBold],
        headerLeft: IconButton,
      }}
    >
      <Screen
        name="MyCartStack"
        component={MyCart}
        options={{ title: "Cart", headerShown: true }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  headerContain: { height: 100, borderBottomWidth: 3 },
});

const { headerContain } = styles;

const { primaryColor, primaryBackground, text3Xl, fontBold } = themes;
