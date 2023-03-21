import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products } from "../screens/Products/Products";
import { AllProducts } from "../screens/AllProducts/AllProducts";
import { ProductDetail } from "../screens/ProductDetail/ProductDetail";

export function ProductsStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="ProductsStack"
        component={Products}
        options={{ title: "Products", headerShown: false }}
      />
      <Screen
        name="AllProductsStack"
        component={AllProducts}
        options={{ title: "AllProducts", headerShown: false }}
      />
      <Screen
        name="ProductDetailStack"
        component={ProductDetail}
        options={{ title: "Product Detail", headerShown: false }}
      />
    </Navigator>
  );
}
