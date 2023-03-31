import { NavigationContainer } from "@react-navigation/native";
import { NavigationDrawer } from "./NavigationDrawer";

export function MainNavigation() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
}
