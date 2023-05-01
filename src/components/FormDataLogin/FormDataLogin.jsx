import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import { login } from "../../store/authUser/actions/authUser.action";
import {
  widthPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function FormDataLogin({ onRoute }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchRedux = useDispatch();

  const handleChangenValueFormEmail = (e) =>
    dispatch({ type: "@CHANGE_FORMEMAIL", payload: e });
  const handleChangeValueFormPassword = (e) =>
    dispatch({ type: "@CHANGE_FORMPASSWORD", payload: e });

  const handleSendData = () => {
    const { formEmail, formPassword } = state;
    dispatchRedux(login(formEmail.trim(), formPassword.trim()));
    dispatch({ type: "@RESET_FORMULARIES" });
  };

  return (
    <View style={[container]}>
      <View style={[contentForm]}>
        <CustomText style={[textLabel, primaryColor]} fontF={"bold"}>
          Email
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontSemiBold]}
          placeholder="Email"
          placeholderTextColor={tertiaryColor.color}
          inputMode="email"
          value={state.formEmail}
          keyboardType="email-address"
          onChangeText={handleChangenValueFormEmail}
          autoCapitalize="none"
        />
        <CustomText style={[textLabel, primaryColor]} fontF={"bold"}>
          Password
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontSemiBold]}
          placeholderTextColor={tertiaryColor.color}
          placeholder="Your password"
          inputMode="text"
          keyboardType="default"
          onChangeText={handleChangeValueFormPassword}
          value={state.formPassword}
        />
      </View>

      <View style={[contentBtns]}>
        <TouchableOpacity
          style={[touchBtn, secondaryBackground]}
          onPress={handleSendData}
        >
          <FontAwesome5 name="key" size={29} color={senaryColor.color} />
          <CustomText style={[btnText, senaryColor]} fontF={"bold"}>
            Access
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[touchBtn, quinaryBackground]}
          onPress={onRoute}
        >
          <FontAwesome5 name="user-alt" size={29} color={senaryColor.color} />
          <CustomText style={[btnText, senaryColor]} fontF={"bold"}>
            Sign Up
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const initialState = {
  formEmail: "",
  formPassword: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type == "@CHANGE_FORMEMAIL") return { ...state, formEmail: payload };
  if (type == "@CHANGE_FORMPASSWORD")
    return { ...state, formPassword: payload };
  if (type == "@RESET_FORMULARIES")
    return { ...state, formPassword: "", formEmail: "" };
  return state;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",

    width: "100%",
    height: "80%",
    marginVertical: pixelSizeVertical(20),
    paddingVertical: pixelSizeHorizontal(5),
  },
  contentForm: {
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),
  },
  input: {
    marginVertical: pixelSizeVertical(5),
    paddingHorizontal: pixelSizeHorizontal(5),
    borderBottomWidth: 2,

    fontSize: fontPixel(9),
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

    minWidth: 260,
    width: widthPixel(220),
    marginVertical: pixelSizeVertical(5),
    paddingVertical: pixelSizeVertical(3),

    borderRadius: 40,
  },
  btnText: {
    marginHorizontal: pixelSizeHorizontal(8),

    fontSize: fontPixel(15),
  },
  textLabel: { fontSize: fontPixel(13) },
});

const {
  container,
  contentForm,
  input,
  textLabel,
  contentBtns,
  touchBtn,
  btnText,
} = styles;

const {
  primaryBorderColor,
  primaryColor,
  secondaryBackground,
  quinaryBackground,
  senaryColor,
  tertiaryColor,
  fontSemiBold,
} = themes;
