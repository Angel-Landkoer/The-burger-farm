import { StyleSheet, View } from "react-native";
import React from "react";
import { CustomText } from "../../components/CustomText/CustomText";
import { themes } from "../../styles/themes";
import { Orders } from "../../components/Orders/Orders";

export function MyOrders({ navigation }) {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      {/* Usuario no registrado no pasa se redireccion a Login */}
      <Orders />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor } = themes;
