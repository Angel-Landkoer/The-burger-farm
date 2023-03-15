import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";

export function FormDataLogin() {
  const [numberPhoneValue, setNumberPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleChangePhoneValue = (e) => setNumberPhoneValue(e);
  const handleChangePasswordValue = (e) => setPasswordValue(e);

  //  useEffect, fireBase, confirm data, yes=true or not=false

  return (
    <View style={[container]}>
      <View style={[contentForm]}>
        <CustomText style={[text3Xl, primaryColor]} fontF={"bold"}>
          Phone Number
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontSemiBold, textBase]}
          placeholderTextColor={tertiaryColor.color}
          placeholder="Your phone number"
          inputMode="number"
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={handleChangePhoneValue}
        />
        <CustomText style={[text3Xl, primaryColor]} fontF={"bold"}>
          Password
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontSemiBold, textBase]}
          placeholderTextColor={tertiaryColor.color}
          placeholder="Your password"
          inputMode="text"
          keyboardType="default"
          onChangeText={handleChangePasswordValue}
        />
      </View>

      <View style={[contentBtns]}>
        <TouchableOpacity
          style={[touchBtn, secondaryBackground]}
          onPress={() => console.warn("Data confirm And redirection")}
        >
          <FontAwesome5 name="key" size={29} color={senaryColor.color} />
          <CustomText style={[btnText, senaryColor, text2Xl]} fontF={"bold"}>
            Access
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[touchBtn, quinaryBackground]}
          onPress={() => console.warn("Data confirm And redirection")}
        >
          <FontAwesome5 name="user-alt" size={29} color={senaryColor.color} />
          <CustomText style={[btnText, senaryColor, text2Xl]} fontF={"bold"}>
            Sign Up
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",

    width: "100%",
    height: "80%",
    marginVertical: 40,
    paddingVertical: 10,
  },
  contentForm: {
    padding: 10,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
  },
  contentBtns: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  touchBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: 260,
    marginVertical: 10,
    paddingVertical: 6,

    borderRadius: 30,
  },
  btnText: {
    marginHorizontal: 16,
  },
});

const { container, contentForm, input, contentBtns, touchBtn, btnText } =
  styles;

const {
  text3Xl,
  primaryBorderColor,
  primaryColor,
  text2Xl,
  secondaryBackground,
  quinaryBackground,
  senaryColor,
  tertiaryColor,
  fontSemiBold,
  textBase,
} = themes;
