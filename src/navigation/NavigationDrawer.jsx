import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer'
import { FindUs } from '../screens/FindUs/FindUs'

export function NavigationDrawer() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="FindUs"
          component={FindUs}
          options={{ title: " Find Us" }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
