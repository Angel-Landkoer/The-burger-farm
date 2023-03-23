import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { ProductsStackNavigation } from "./ProductsStackNavigation";
import { CartStackNavigation } from "./CartStackNavigation";
import { DataStackNavigation } from "./DataStackNavigation";
import { OrderStackNavigation } from "./OrderStackNavigation";
import { FindUs } from "../screens/FindUs/FindUs";
import { themes } from "../styles/themes";

export function NavigationDrawer() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          drawerLabelStyle: [primaryColor, textXl, fontBold],
          drawerStyle: [primaryBackground],
          headerStyle: [primaryBackground, headerContain],
          headerTitleStyle: [text3Xl, primaryColor, fontBold],
          headerTitleAlign: "center",
        }}
      >
        <Screen
          name="ProductDrawer"
          component={ProductsStackNavigation}
          options={{
            title: "Products",
            headerShown: true,
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="hamburger" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="CartDrawer"
          component={CartStackNavigation}
          options={{
            title: "My Cart",
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <FontAwesome5 name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="DataDrawer"
          component={DataStackNavigation}
          options={{
            title: "My Data",
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-sharp" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="OrderDrawer"
          component={OrderStackNavigation}
          options={{
            title: "My Order",
            headerShown: false,
            drawerIcon: ({ size, color }) => (
              <FontAwesome5
                name="file-invoice-dollar"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Screen
          name="FindUs"
          component={FindUs}
          options={{
            title: " Find Us",
            headerShown: false,
            drawerIcon: ({ size, color }) => (
              <Ionicons name="map" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContain: {
    height: 100,
    borderBottomWidth: 3,
  },
});

const { headerContain } = styles;

const {
  primaryColor,
  textXl,
  text3Xl,
  fontBold,
  primaryBackground,
  textCenter,
} = themes;
