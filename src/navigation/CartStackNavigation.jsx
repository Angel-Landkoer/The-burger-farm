import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { IconButton } from "../components/IconButton/IconButton";
import { MyCart } from "../screens/MyCart/MyCart";
import { themes } from "../styles/themes";
import { heightPixel, fontPixel } from "../styles/normalize";

export function CartStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerStyle: [primaryBackground, headerContain],
        headerTitleAlign: "center",
        headerTitleStyle: [primaryColor, title, fontBold],
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
  headerContain: {
    minHeight: heightPixel(60),
    height: heightPixel(100),
    borderBottomWidth: 3,
  },
  title: {
    fontSize: fontPixel(15),
  },
});

const { headerContain, title } = styles;

const { primaryColor, primaryBackground, fontBold } = themes;
