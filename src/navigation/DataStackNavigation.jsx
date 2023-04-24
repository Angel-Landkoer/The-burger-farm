import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { Login } from "../screens/Login/Login";
import { LoginCompleted } from "../screens/Login/LoginCompleted";
import { UpdateAddress } from "../screens/Login/UpdateAddress";
import { UpdateDataUser } from "../screens/Login/UpdateDataUser";
import { SignUp } from "../screens/SignUp/SignUp";
import { IconButton } from "../components/IconButton/IconButton";
import { themes } from "../styles/themes";
import { fontPixel } from "../styles/normalize";

export function DataStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  const registed = useSelector((state) => state.auth.existemAccount);

  return (
    <Navigator
      screenOptions={{
        headerStyle: [primaryBackground, headerContain],
        headerTitleStyle: [styleTitle, fontBold, primaryColor],
        headerTitleAlign: "center",
        headerLeft: IconButton,
      }}
    >
      {registed ? (
        <Screen
          name="LoginCompletedStack"
          component={LoginCompleted}
          options={{ title: "My Data", headerShown: true }}
        />
      ) : (
        <Screen
          name="LoginStack"
          component={Login}
          options={{ title: "The Farm", headerShown: true }}
        />
      )}

      <Screen
        name="UpdateAddressStack"
        component={UpdateAddress}
        options={{ title: "Address", headerShown: true, headerLeft: () => "" }}
      />
      <Screen
        name="UpdateDataUserStack"
        component={UpdateDataUser}
        options={{
          title: "Update Data",
          headerShown: true,
          headerLeft: () => "",
        }}
      />
      <Screen
        name="SignUpStack"
        component={SignUp}
        options={{ title: "Sign Up", headerShown: true }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  headerContain: {
    height: 100,
    borderBottomWidth: 3,
  },
  styleTitle: {
    fontSize: fontPixel(15),
  },
});

const { headerContain, styleTitle } = styles;

const { primaryColor, primaryBackground, fontBold } = themes;
