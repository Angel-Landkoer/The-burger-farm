import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { themes } from "../../styles/themes";

export function FormDataSignUp() {
  return (
    <View style={[container]}>
      <View style={[contentForm]}>
        <Text style={[text3Xl, fontBold, primaryColor]}>Phone Number</Text>
        <TextInput
          style={[input, primaryBorderColor, fontSemiBold, textBase]}
          placeholder="Your phone number"
          inputMode="number"
          keyboardType="phone-pad"
          maxLength={10}
        />
        <Text style={[text3Xl, fontBold, primaryColor]}>Password</Text>
        <TextInput
          style={[input, primaryBorderColor, fontSemiBold, textBase]}
          placeholder="Your password"
          inputMode="text"
          keyboardType="default"
        />
        <Text style={[text3Xl, fontBold, primaryColor]}>Confirm Password</Text>
        <TextInput
          style={[input, primaryBorderColor, fontSemiBold, textBase]}
          placeholder="Your password"
          inputMode="text"
          keyboardType="default"
        />
      </View>
      <View style={[contentBtn]}>
        <TouchableOpacity style={[touchBtn, tertiaryBackground]}>
          <FontAwesome5 name="save" size={24} color={senaryColor.color} />
          <Text style={[btnText, senaryColor, text2Xl, fontBold]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",

    width: "100%",
    height: "90%",
    marginVertical: 40,
    paddingVertical: 10,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
  },
  contentForm: {
    padding: 10,
  },
  contentBtn: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  touchBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 300,
    marginVertical: 10,
    paddingVertical: 6,

    borderRadius: 30,
  },
  btnText: {
    marginHorizontal: 16,
  },
});

const { input, container, contentForm, touchBtn, btnText, contentBtn } = styles;

const {
  text3Xl,
  fontBold,
  primaryBorderColor,
  primaryColor,
  text2Xl,
  senaryColor,
  tertiaryColor,
  tertiaryBackground,
  fontSemiBold,
  textBase,
} = themes;
