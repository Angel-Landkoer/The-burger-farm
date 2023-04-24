import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyOrders } from "../screens/MyOrders/MyOrders";
import { IconButton } from "../components/IconButton/IconButton";
import { themes } from "../styles/themes";
import { FinalizeOrder } from "../screens/MyOrders/FinalizeOrder";
import { StyleSheet } from "react-native";
import { fontPixel } from "../styles/normalize";

export function OrderStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerStyle: [primaryBackground],
        headerTitleStyle: [styleTitle, fontBold, primaryColor],
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
      <Screen
        name="FinalizeOrderStack"
        component={FinalizeOrder}
        options={{ title: "My Order", headerShown: true }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  styleTitle: {
    fontSize: fontPixel(15),
  },
});

const { styleTitle } = styles;

const { primaryColor, primaryBackground, fontBold } = themes;
