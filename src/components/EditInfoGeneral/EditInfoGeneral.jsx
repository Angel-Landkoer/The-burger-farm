import { StyleSheet, TextInput, View } from "react-native";
import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { themes } from "../../styles/themes";
import { ButtonSaveClose } from "../ButtonSaveClose/ButtonSaveClose";
import { Modall } from "../../components/Modal/Modall";
import { updateDataUser } from "../../store/authUser/actions/authUser.action";
import {
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function EditInfoGeneral({ goToBack, dataDefault, userId }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchRedux = useDispatch();

  const { email, phone, name, lastName } = dataDefault;

  const handleChangenValueFormName = (e) =>
    dispatch({ type: "@CHANGE_FORMNAME", payload: e });
  const handleChangenValueFormLastName = (e) =>
    dispatch({ type: "@CHANGE_FORMLASTNAME", payload: e });
  const handleChangenValueFormPhone = (e) =>
    dispatch({ type: "@CHANGE_FORMPHONE", payload: e });
  const handleChangenValueFormEmail = (e) =>
    dispatch({ type: "@CHANGE_FORMEMAIL", payload: e });

  const onSaveData = () => {
    const { formName, formLastName, formPhone, formEmail } = state;

    const formulariesLength = [formName, formLastName, formPhone, formEmail];

    const maxLength = formulariesLength.every((item) => item.length > 0);

    if (!maxLength) return dispatch({ type: "@TOGGLE_MODAL_ERRONEOUSLY" });

    if (maxLength) {
      dispatchRedux(
        updateDataUser(userId, {
          name: formName.trim(),
          lastName: formLastName.trim(),
          phone: formPhone.trim(),
        })
      );
      dispatch({ type: "@TOGGLE_MODAL_CORRECTLY" });
      goToBack();
    }
  };

  const modallCorrect = [
    {
      textBtn: "OK",
      actionState: () => dispatch({ type: "@TOGGLE_MODAL_CORRECTLY" }),
    },
  ];

  const modallError = [
    {
      textBtn: "ACCEPT",
      actionState: () => dispatch({ type: "@TOGGLE_MODAL_ERRONEOUSLY" }),
    },
  ];

  return (
    <View style={[container]}>
      <View style={[contentInput, primaryBorderColor]}>
        <TextInput
          style={[input, primaryColor, fontBold, tertiaryBorderColor]}
          placeholder="Name"
          placeholderTextColor={tertiaryColor.color}
          inputMode="text"
          keyboardType="default"
          onChangeText={handleChangenValueFormName}
          defaultValue={name ? name : "null"}
        />
        <TextInput
          style={[input, tertiaryColor, fontBold, tertiaryBorderColor]}
          placeholder="Last Name"
          placeholderTextColor={tertiaryColor.color}
          inputMode="text"
          keyboardType="default"
          onChangeText={handleChangenValueFormLastName}
          defaultValue={lastName ? lastName : "null"}
        />
        <TextInput
          style={[input, tertiaryColor, fontBold, tertiaryBorderColor]}
          placeholder="Phone"
          placeholderTextColor={tertiaryColor.color}
          inputMode="numeric"
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={handleChangenValueFormPhone}
          defaultValue={phone ? phone.toString() : "null"}
        />
        <TextInput
          style={[input, tertiaryColor, fontBold, tertiaryBorderColor]}
          placeholder="Email"
          placeholderTextColor={tertiaryColor.color}
          inputMode="email"
          keyboardType="email-address"
          defaultValue={email ? email : "null"}
          onChangeText={handleChangenValueFormEmail}
        />
      </View>
      <Modall
        btns={modallCorrect}
        state={state.toggleModalCorrectly}
        title={"Data successfully updated"}
      />
      <Modall
        btns={modallError}
        state={state.toggleModalErroneously}
        title={"Please fill in all fields"}
      />
      <View style={[contentBtns]}>
        <ButtonSaveClose onGoToBack={goToBack} onSaveData={onSaveData} />
      </View>
    </View>
  );
}

const initialState = {
  formName: "",
  formLastName: "",
  formPhone: "",
  formEmail: "",
  toggleModalCorrectly: false,
  toggleModalErroneously: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type == "@CHANGE_FORMNAME") return { ...state, formName: payload };
  if (type == "@CHANGE_FORMLASTNAME")
    return { ...state, formLastName: payload };
  if (type == "@CHANGE_FORMPHONE") return { ...state, formPhone: payload };
  if (type == "@CHANGE_FORMEMAIL") return { ...state, formEmail: payload };
  if (type == "@TOGGLE_MODAL_CORRECTLY")
    return { ...state, toggleModalCorrectly: !state.toggleModalCorrectly };
  if (type == "@TOGGLE_MODAL_ERRONEOUSLY")
    return { ...state, toggleModalErroneously: !state.toggleModalErroneously };
  return state;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",

    width: "100%",
    height: "90%",
  },
  contentInput: {
    minWidth: 280,
    width: "90%",
    maxWidth: "100%",
    paddingHorizontal: pixelSizeHorizontal(6),
    paddingVertical: pixelSizeVertical(6),
    borderWidth: 1,

    borderRadius: 15,
  },
  input: {
    width: "100%",
    paddingHorizontal: pixelSizeHorizontal(3),
    paddingVertical: pixelSizeVertical(3),
    marginVertical: pixelSizeVertical(5),

    borderBottomWidth: 1,
  },
  contentBtns: {
    alignItems: "center",
    justifyContent: "center",
  },
});

const { input, container, contentBtns, contentInput } = styles;

const {
  primaryColor,
  primaryBorderColor,
  fontBold,
  tertiaryColor,
  tertiaryBorderColor,
} = themes;
