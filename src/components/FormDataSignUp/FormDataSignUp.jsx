import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import { Modall } from "../Modal/Modall";
import { signUp } from "../../store/authUser/actions/authUser.action";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function FormDataSignUp({ goToBack }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchRedux = useDispatch();

  const isLoading = useSelector((state) => state.auth.isLoading);

  const handleChangenValueFormEmail = (e) =>
    dispatch({ type: "@CHANGE_FORMEMAIL", payload: e });

  const handleChangeValueFormPassword = (e) =>
    dispatch({ type: "@CHANGE_FORMPASSWORD", payload: e });

  const handleChangeValueFormConfirmPassword = (e) =>
    dispatch({ type: "@CHANGE_FORMCONFIRMPASSWORD", payload: e });

  const handleFormData = () => {
    const formulariesLength = [
      state.formEmail,
      state.formPassword,
      state.formConfirmPassword,
    ];
    const maxLength = formulariesLength.every((item) => item.length > 0);

    const equalPassword =
      state.formPassword.trim() == state.formConfirmPassword.trim();

    if (maxLength && equalPassword) {
      const { formEmail, formPassword } = state;

      dispatchRedux(signUp(formEmail.trim(), formPassword.trim()));
      dispatch({ type: "@TOGGLE_MODAL" });
      dispatch({ type: "@RESET_FORMULARIES" });
    }

    if (!maxLength || !equalPassword)
      return dispatch({ type: "@TOGGLE_MODAL_ERRONEOUSLY" });
  };

  const handleModalToggle = () => {
    dispatch({ type: "@TOGGLE_MODAL" });
    goToBack();
  };

  const handleModalError = () =>
    dispatch({ type: "@TOGGLE_MODAL_ERRONEOUSLY" });

  const modalBtn = [{ textBtn: "OK", actionState: handleModalToggle }];

  const modalBtnError = [{ textBtn: "OK", actionState: handleModalError }];

  return (
    <View style={[container]}>
      <View style={[contentForm]}>
        <CustomText style={[labeltext, primaryColor]} fontF={"bold"}>
          Email
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold]}
          placeholder="Email"
          inputMode="email"
          value={state.formEmail}
          keyboardType="email-address"
          onChangeText={handleChangenValueFormEmail}
          autoCapitalize="none"
        />
        <CustomText style={[labeltext, primaryColor]} fontF={"bold"}>
          Password
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold]}
          placeholder="Your password"
          maxLength={20}
          inputMode="text"
          onChangeText={handleChangeValueFormPassword}
          value={state.formPassword}
          keyboardType="default"
          autoCapitalize="none"
        />
        <CustomText style={[labeltext, primaryColor]} fontF={"bold"}>
          Confirm Password
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold]}
          placeholder="Your password"
          maxLength={20}
          inputMode="text"
          onChangeText={handleChangeValueFormConfirmPassword}
          value={state.formConfirmPassword}
          keyboardType="default"
          autoCapitalize="none"
        />
      </View>
      <Modall
        state={state.confirmRegister}
        title={isLoading ? "Loading" : "REGISTED"}
        btns={modalBtn}
      />
      <Modall
        btns={modalBtnError}
        state={state.toggleModalErroneously}
        title={"Please fill in all fields correctly"}
      />
      <View style={[contentBtn]}>
        <TouchableOpacity
          style={[touchBtn, tertiaryBackground]}
          onPress={handleFormData}
        >
          <FontAwesome5 name="save" size={24} color={senaryColor.color} />
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
  formConfirmPassword: "",
  confirmRegister: false,
  toggleModalErroneously: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type == "@CHANGE_FORMEMAIL") return { ...state, formEmail: payload };
  if (type == "@CHANGE_FORMPASSWORD")
    return { ...state, formPassword: payload };
  if (type == "@CHANGE_FORMCONFIRMPASSWORD")
    return { ...state, formConfirmPassword: payload };
  if (type == "@RESET_FORMULARIES")
    return {
      ...state,
      formEmail: "",
      formPassword: "",
      formConfirmPassword: "",
    };
  if (type == "@TOGGLE_MODAL")
    return { ...state, confirmRegister: !state.confirmRegister };
  if (type == "@TOGGLE_MODAL_ERRONEOUSLY")
    return { ...state, toggleModalErroneously: !state.toggleModalErroneously };
  return state;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",

    width: "100%",
    height: "80%",
    marginVertical: pixelSizeVertical(20),
    paddingVertical: pixelSizeVertical(10),
  },
  input: {
    marginVertical: pixelSizeVertical(5),
    paddingHorizontal: pixelSizeHorizontal(3),
    borderBottomWidth: 2,

    fontSize: fontPixel(11),
  },
  labeltext: {
    fontSize: fontPixel(15),
  },
  contentForm: {
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),
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

    minWidth: widthPixel(200),
    width: widthPixel(250),
    minHeight: heightPixel(20),
    heigth: heightPixel(25),
    marginVertical: pixelSizeVertical(5),
    paddingVertical: pixelSizeVertical(3),

    borderRadius: 40,
  },
  btnText: {
    marginHorizontal: pixelSizeHorizontal(8),

    fontSize: fontPixel(18),
  },
  contentFormulayIncomplete: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: 30,
    paddingBottom: 8,
    marginBottom: 20,
  },
});

const {
  input,
  container,
  contentForm,
  touchBtn,
  btnText,
  contentBtn,
  labeltext,
} = styles;

const {
  primaryBorderColor,
  primaryColor,
  senaryColor,
  tertiaryBackground,
  fontBold,
} = themes;
