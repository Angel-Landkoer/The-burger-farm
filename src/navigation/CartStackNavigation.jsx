import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyCart } from "../screens/MyCart/MyCart";
import { ProductDetail } from "../screens/ProductDetail/ProductDetail";

export function CartStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen name="MyCartStack" component={MyCart} options={{title: "", headerShown: false}} />
      <Screen name="ProductDetailStack" component={ProductDetail} options={{title: "", headerShown: false}} />
    </Navigator>
  );
}
