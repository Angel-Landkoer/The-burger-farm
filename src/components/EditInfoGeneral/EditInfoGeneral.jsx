import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React, { useReducer } from "react";
import { themes } from "../../styles/themes";
import { ButtonSaveClose } from "../ButtonSaveClose/ButtonSaveClose";
import { Modall } from "../../components/Modal/Modall";
import { CustomText } from "../CustomText/CustomText";

export function EditInfoGeneral({ goToBack, dataDefault }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
    const formulariesLength = [
      state.formName,
      state.formLastName,
      state.formPhone,
      state.formEmail,
    ];

    const maxLength = formulariesLength.some((item) => item.length > 0);

    // cuando los dato se guarden se despliega el modal
    if (maxLength) return dispatch({ type: "@TOGGLE_MODAL" });
  };

  return (
    <View style={[container]}>
      <View style={[contentInput, primaryBorderColor]}>
        <TextInput
          style={[input, primaryColor, textBase, fontBold, tertiaryBorderColor]}
          placeholder="Name"
          placeholderTextColor={tertiaryColor.color}
          inputMode="text"
          keyboardType="default"
          onChangeText={handleChangenValueFormName}
          defaultValue={name ? name : "null"}
        />
        <TextInput
          style={[
            input,
            tertiaryColor,
            textBase,
            fontBold,
            tertiaryBorderColor,
          ]}
          placeholder="Last Name"
          placeholderTextColor={tertiaryColor.color}
          inputMode="text"
          keyboardType="default"
          onChangeText={handleChangenValueFormLastName}
          defaultValue={lastName ? lastName : "null"}
        />
        <TextInput
          style={[
            input,
            tertiaryColor,
            textBase,
            fontBold,
            tertiaryBorderColor,
          ]}
          placeholder="Phone"
          placeholderTextColor={tertiaryColor.color}
          inputMode="numeric"
          keyboardType="phone-pad"
          onChangeText={handleChangenValueFormPhone}
          // el dato por defecto es el mismo con el que se inicio la cuenta
          defaultValue={phone ? phone.toString() : "null"}
        />
        <TextInput
          style={[
            input,
            tertiaryColor,
            textBase,
            fontBold,
            tertiaryBorderColor,
          ]}
          placeholder="Email"
          placeholderTextColor={tertiaryColor.color}
          inputMode="email"
          keyboardType="email-address"
          defaultValue={email ? email : "null"}
          onChangeText={handleChangenValueFormEmail}
        />
      </View>
      <Modall state={state.toggleModal} text={"Data successfully updated"}>
        <Pressable
          style={[modalBtn, septenaryBackground]}
          onPress={() => dispatch({ type: "@TOGGLE_MODAL" })}
        >
          <CustomText
            style={[textModalBtn, senaryColor, textLg]}
            fontF={"semiBold"}
          >
            OK
          </CustomText>
        </Pressable>
      </Modall>
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
  toggleModal: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type == "@CHANGE_FORMNAME") return { ...state, formName: payload };
  if (type == "@CHANGE_FORMLASTNAME")
    return { ...state, formLastName: payload };
  if (type == "@CHANGE_FORMPHONE") return { ...state, formPhone: payload };
  if (type == "@CHANGE_FORMEMAIL") return { ...state, formEmail: payload };
  if (type == "@TOGGLE_MODAL")
    return { ...state, toggleModal: !state.toggleModal };
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
    padding: 12,
    borderWidth: 1,

    borderRadius: 15,
  },
  input: {
    width: "100%",
    padding: 5,
    marginVertical: 10,

    borderBottomWidth: 1,
  },
  contentBtns: {
    alignItems: "center",
    justifyContent: "center",
  },
  modalBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,

    borderRadius: 20,
  },
  textModalBtn: {},
});

const { input, container, contentBtns, contentInput, modalBtn, textModalBtn } =
  styles;

const {
  primaryColor,
  primaryBorderColor,
  textBase,
  fontBold,
  tertiaryColor,
  tertiaryBorderColor,
  senaryColor,
  textLg,
  septenaryBackground,
} = themes;
