import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import { Modall } from "../Modal/Modall";
import { signUp } from "../../store/authUser/actions/authUser.action";

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

    if (maxLength) {
      const { formEmail, formPassword } = state;

      dispatchRedux(signUp(formEmail.trim(), formPassword.trim()));
      dispatch({ type: "@TOGGLE_MODAL" });
      dispatch({ type: "@RESET_FORMULARIES" });
    }

    !maxLength && dispatch({ type: "@INCOMPLETE_FORMULARY" });
  };

  const handleModalToggle = () => {
    dispatch({ type: "@TOGGLE_MODAL" });
    goToBack();
  };

  const modalBtn = [{ textBtn: "OK", actionState: handleModalToggle }];

  return (
    <View style={[container]}>
      <View style={[contentForm]}>
        <CustomText style={[text3Xl, primaryColor]} fontF={"bold"}>
          Email
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold, textBase]}
          placeholder="Email"
          // placeholderTextColor={tertiaryColor.color}
          inputMode="email"
          value={state.formEmail}
          keyboardType="email-address"
          onChangeText={handleChangenValueFormEmail}
          autoCapitalize="none"
        />
        <CustomText style={[text3Xl, primaryColor]} fontF={"bold"}>
          Password
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold, textBase]}
          placeholder="Your password"
          maxLength={20}
          inputMode="text"
          onChangeText={handleChangeValueFormPassword}
          value={state.formPassword}
          keyboardType="default"
          autoCapitalize="none"
        />
        <CustomText style={[text3Xl, primaryColor]} fontF={"bold"}>
          Confirm Password
        </CustomText>
        <TextInput
          style={[input, primaryBorderColor, fontBold, textBase]}
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
        state={state.toggleModal}
        title={isLoading ? "Loading" : "REGISTED"}
        btns={modalBtn}
      />
      {state.incomplete && (
        <View style={[contentFormulayIncomplete]}>
          <CustomText style={[textLg, quinaryColor]} fontF={"medium"}>
            Complete the Formulary
          </CustomText>
        </View>
      )}
      <View style={[contentBtn]}>
        <TouchableOpacity
          style={[touchBtn, tertiaryBackground]}
          onPress={handleFormData}
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
  formEmail: "",
  formPassword: "",
  formConfirmPassword: "",
  incomplete: false,
  toggleModal: false,
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
  if (type == "@INCOMPLETE_FORMULARY")
    return { ...state, incomplete: !state.incomplete };
  if (type == "@TOGGLE_MODAL")
    return { ...state, toggleModal: !state.toggleModal };
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
  contentFormulayIncomplete: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 30,
    paddingBottom: 8,
    marginBottom: 20,
  },
  contentTextFormulayIncomplete: {},
});

const {
  input,
  container,
  contentForm,
  touchBtn,
  btnText,
  contentBtn,
  contentFormulayIncomplete,
  contentTextFormulayIncomplete,
} = styles;

const {
  text3Xl,
  primaryBorderColor,
  primaryColor,
  text2Xl,
  textLg,
  quinaryColor,
  senaryColor,
  tertiaryBackground,
  fontBold,
  textBase,
} = themes;
