import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { EditAddress } from "../../components/EditAddress/EditAddress";
import { themes } from "../../styles/themes";

// dato de los ciudades and departamentos

// EJ: Datos estaticos
const countries = [
  "Colombia",
  "Peru",
  "Argentina",
  "Bolivia",
  "Uruguai",
  "Mexico",
  "Canada",
  "Chile",
];

const seletions = ["select", "Street", "Race"];


export function UpdateAddress() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Text style={[primaryColor, textLg, fontBold, textJustify]}>
        It is important that you are precise and detailed when entering your
        address, this will ensure that your order can be delivered in the
        shortest possible time. Additionally, if you can confirm your address on
        our map, it will be easier to deliver it.
      </Text>
      <EditAddress />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const {
  containerFontBox,
  primaryBackground,
  textLg,
  fontBold,
  primaryColor,
  textJustify,
} = themes;
