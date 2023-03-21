import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ProductsStackNavigation } from "./ProductsStackNavigation";
import { CartStackNavigation } from "./CartStackNavigation";
import { DataStackNavigation } from "./DataStackNavigation";
import { OrderStackNavigation } from "./OrderStackNavigation";
import { FindUs } from "../screens/FindUs/FindUs";

export function NavigationDrawer() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="ProductDrawer"
          component={ProductsStackNavigation}
          options={{ title: "Products" }}
        />
        <Screen
          name="CartDrawer"
          component={CartStackNavigation}
          options={{ title: "My Cart" }}
        />
        <Screen
          name="DataDrawer"
          component={DataStackNavigation}
          options={{ title: "My Data" }}
        />
        <Screen
          name="OrderDrawer"
          component={OrderStackNavigation}
          options={{ title: "My Order" }}
        />
        <Screen
          name="FindUs"
          component={FindUs}
          options={{ title: " Find Us" }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
