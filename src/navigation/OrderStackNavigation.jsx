import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyOrders } from "../screens/MyOrders/MyOrders";
import { IconButton } from '../components/IconButton/IconButton'
import { themes } from "../styles/themes";

export function OrderStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerStyle: [primaryBackground],
        headerTitleStyle: [text3Xl, fontBold, primaryColor],
        headerTitleAlign: "center",
        headerLeft: IconButton,
      }}
    >
      <Screen
        name="MyOrderStack"
        component={MyOrders}
        options={{
          title: "HISTORIC",
          headerShown: true,
        }}
      />
    </Navigator>
  );
}

const { primaryColor, primaryBackground, text3Xl, fontBold } = themes;
