import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyOrders } from "../screens/MyOrders/MyOrders";

export function OrderStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="MyOrderStack"
        component={MyOrders}
        options={{ title: "", headerShown: false }}
      />
    </Navigator>
  );
}
