import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Products } from "../screens/Products/Products";
import { MyCart } from "../screens/MyCart/MyCart";
import { Login } from "../screens/Login/Login";
import { MyOrders } from "../screens/MyOrders/MyOrders";
import { FindUs } from "../screens/FindUs/FindUs";

export function Navigation() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Products" component={Products} />
        <Screen name="MyCart" component={MyCart} />
        <Screen name="MyData" component={Login} />
        <Screen name="MyOrders" component={MyOrders} />
        <Screen name="FindUs" component={FindUs} />
      </Navigator>
    </NavigationContainer>
  );
}
