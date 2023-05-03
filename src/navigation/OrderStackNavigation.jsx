import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyOrders } from "../screens/MyOrders/MyOrders";
import { IconButton } from "../components/IconButton/IconButton";
import { themes } from "../styles/themes";
import { FinalizeOrder } from "../screens/MyOrders/FinalizeOrder";
import { StyleSheet } from "react-native";
import { fontPixel } from "../styles/normalize";
import { useNavigation } from "@react-navigation/native";

export function OrderStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();
  const { goBack, navigate } = useNavigation();
  const toNavigate = (direction) => navigate(direction);
  const goToBack = () => goBack();

  return (
    <Navigator
      screenOptions={{
        headerStyle: [primaryBackground],
        headerTitleStyle: [styleTitle, fontBold, primaryColor],
        headerTitleAlign: "center",
      }}
    >
      <Screen
        name="MyOrderStack"
        component={MyOrders}
        options={{
          title: "HISTORIC",
          headerShown: true,
          headerLeft: () => (
            <IconButton callback={() => toNavigate("ProductDrawer")} />
          ),
        }}
      />
      <Screen
        name="FinalizeOrderStack"
        component={FinalizeOrder}
        options={{
          title: "My Order",
          headerShown: true,
          headerLeft: () => <IconButton callback={goToBack} />,
        }}
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
