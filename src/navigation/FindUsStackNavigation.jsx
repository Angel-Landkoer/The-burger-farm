import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FindUs } from "../screens/FindUs/FindUs";
import { IconButton } from "../components/IconButton/IconButton";
import { themes } from "../styles/themes";
import { useNavigation } from "@react-navigation/native";

export function FindUsStackNavigation() {
  const { Screen, Navigator } = createNativeStackNavigator();

  const { goBack } = useNavigation();
  const goToBack = () => goBack();

  return (
    <Navigator
      screenOptions={{
        headerStyle: [primaryBackground, headerContain],
        headerTitleAlign: "center",
        headerTitleStyle: [fontBold, primaryColor],
        headerLeft: () => <IconButton callback={goToBack} />,
      }}
    >
      <Screen name="FindUs" component={FindUs} options={{ title: "Find Us" }} />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  headerContain: {
    height: 100,
    borderBottomWidth: 3,
  },
});

const { headerContain } = styles;

const { primaryColor, primaryBackground, fontBold } = themes;
