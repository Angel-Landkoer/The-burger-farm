import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useSelector } from "react-redux";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { ProductsStackNavigation } from "./ProductsStackNavigation";
import { CartStackNavigation } from "./CartStackNavigation";
import { DataStackNavigation } from "./DataStackNavigation";
import { OrderStackNavigation } from "./OrderStackNavigation";
import { FindUsStackNavigation } from "./FindUsStackNavigation";
import { themes } from "../styles/themes";
import { CustomText } from "../components/CustomText/CustomText";

export function NavigationDrawer() {
  const { Navigator, Screen } = createDrawerNavigator();

  const registered = useSelector((state) => state.auth.existemAccount);

  return (
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
          headerRight: () => <IconCartLength />,
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
      {registered ? (
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
      ) : (
        <Screen
          name="OrderDrawer"
          component={DataStackNavigation}
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
      )}

      <Screen
        name="FindUpDrawer"
        component={FindUsStackNavigation}
        options={{
          title: "Find Us",
          headerShown: false,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="map" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

function IconCartLength() {
  const lengthCart = useSelector((state) => state.cart.sizeCart);
  const { navigate } = useNavigation();
  const route = () => navigate("CartDrawer");

  return (
    <TouchableWithoutFeedback onPress={route}>
      <View style={contentLengthCart}>
        <View style={[contentTextLengthCart]}>
          <CustomText style={[senaryColor]} fontF={"semiBold"}>
            {lengthCart}
          </CustomText>
        </View>
        <FontAwesome5
          name="shopping-cart"
          size={28}
          color={primaryColor.color}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerContain: {
    height: 100,
    borderBottomWidth: 3,
  },
  contentTextLengthCart: {
    position: "absolute",
    top: 1,
    right: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 18,
    height: 18,
    backgroundColor: "red",
    borderRadius: 20,
    zIndex: 1,
  },
  contentLengthCart: {
    alignItems: "center",
    justifyContent: "center",
    width: 84,
    height: 40,
  },
});

const { headerContain, contentTextLengthCart, contentLengthCart } = styles;

const {
  primaryColor,
  textXl,
  text3Xl,
  fontBold,
  primaryBackground,
  textCenter,
  senaryColor,
} = themes;
