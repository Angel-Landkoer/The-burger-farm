import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login/Login";
import { LoginCompleted } from "../screens/Login/LoginCompleted";
import { UpdateAddress } from "../screens/Login/UpdateAddress";
import { UpdateDataUser } from "../screens/Login/UpdateDataUser";
import { SignUp } from "../screens/SignUp/SignUp";

export function DataStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  return (
    <Navigator>
      <Screen
        name="LoginStack"
        component={Login}
        options={{ title: "", headerShown: false }}
      />
      <Screen
        name="LoginCompletedStack"
        component={LoginCompleted}
        options={{ title: "", headerShown: false }}
      />
      <Screen
        name="UpdateAddressStack"
        component={UpdateAddress}
        options={{ title: "", headerShown: false }}
      />
      <Screen
        name="UpdateDataUserStack"
        component={UpdateDataUser}
        options={{ title: "", headerShown: false }}
      />
      <Screen
        name="SignUpStack"
        component={SignUp}
        options={{ title: "", headerShown: false }}
      />
    </Navigator>
  );
}
