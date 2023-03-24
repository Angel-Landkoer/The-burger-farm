import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React, { useReducer } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";

export function FormDataSignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeValueFormPhone = (e) =>
    dispatch({ type: "@CHANGE_FORMPHONE", payload: e });

  const handleChangeValueFormPassword = (e) =>
    dispatch({ type: "@CHANGE_FORMPASSWORD", payload: e });

  const handleChangeValueFormConfirmPassword = (e) =>
    dispatch({ type: "@CHANGE_FORMCONFIRMPASSWORD", payload: e });

  return (
    <View style={[container]}>
      <View style={[contentForm]}>
        <CustomText style={[text3Xl, primaryColor]} fontF={"bold"}>
          Phone Number
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold, textBase]}
          placeholder="Your phone number"
          inputMode="number"
          onChangeText={handleChangeValueFormPhone}
          value={state.formPhone}
          keyboardType="phone-pad"
          maxLength={10}
        />
        <CustomText style={[text3Xl, primaryColor]} fontF={"bold"}>
          Password
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold, textBase]}
          placeholder="Your password"
          inputMode="text"
          onChangeText={handleChangeValueFormPassword}
          value={state.formPassword}
          keyboardType="default"
        />
        <CustomText style={[text3Xl, primaryColor]} fontF={"bold"}>
          Confirm Password
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold, textBase]}
          placeholder="Your password"
          inputMode="text"
          onChangeText={handleChangeValueFormConfirmPassword}
          value={state.formConfirmPassword}
          keyboardType="default"
        />
      </View>
      <View style={[contentBtn]}>
        <TouchableOpacity
          style={[touchBtn, tertiaryBackground]}
          onPress={() => console.warn("Create new User, loading...")}
        >
          <FontAwesome5 name="save" size={24} color={senaryColor.color} />
          <CustomText style={[btnText, senaryColor, text2Xl]} fontF={"bold"}>
            Sign Up
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const initialState = {
  formPhone: "",
  formPassword: "",
  formConfirmPassword: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type == "@CHANGE_FORMPHONE") return { ...state, formPhone: payload };
  if (type == "@CHANGE_FORMPASSWORD")
    return { ...state, formPassword: payload };
  if (type == "@CHANGE_FORMCONFIRMPASSWORD")
    return { ...state, formConfirmPassword: payload };
  if (type == "@RESET_FORMULARIES")
    return {
      ...state,
      formPhone: "",
      formPassword: "",
      formConfirmPassword: "",
    };
  return state;
};

const styles = StyleSheet.create({
  
  container: {
    justifyContent: "space-between",

    width: "100%",
    height: "80%",
    marginVertical: 25,
    paddingVertical: 15,
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
  primaryBorderColor,
  primaryColor,
  text2Xl,
  senaryColor,
  tertiaryBackground,
  fontBold,
  textBase,
} = themes;
