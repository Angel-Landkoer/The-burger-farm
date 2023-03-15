import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import { themes } from "../../styles/themes";
import { ButtonSaveClose } from "../ButtonSaveClose/ButtonSaveClose";

export function EditInfoGeneral() {
  return (
    <View style={[container]}>
      <View style={[contentInput, primaryBorderColor]}>
        <TextInput
          style={[input, primaryColor, textBase, fontBold, tertiaryBorderColor]}
          placeholder="Name"
          placeholderTextColor={tertiaryColor.color}
          inputMode="text"
          keyboardType="default"
          onChangeText={null}
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
          onChangeText={null}
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
          onChangeText={null}
          // el dato por defecto es el mismo con el que se inicio la cuenta
          defaultValue={null}
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
          onChangeText={null}
        />
      </View>
      <View style={[contentBtns]}>
        <ButtonSaveClose />
      </View>
    </View>
  );
}

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
});

const { input, container, contentBtns, contentInput } = styles;

const {
  primaryColor,
  primaryBorderColor,
  textBase,
  fontBold,
  tertiaryColor,
  tertiaryBorderColor,
} = themes;
