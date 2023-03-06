import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { themes } from "../../styles/themes";
import { ButtonSaveClose } from "../ButtonSaveClose/ButtonSaveClose";

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
//

export function EditAddress() {
  return (
    <View style={[container]}>
      <View style={[allForms, primaryBorderColor]}>
        <View style={[contentFormDropdown]}>
          <SelectDropdown
            buttonStyle={{
              borderBottomWidth: 1,
              width: "80%",
              height: 35,
              borderColor: primaryBorderColor.borderColor,
            }}
            buttonTextStyle={{
              padding: 0,
              color: secondaryColor.color,
            }}
            data={countries}
            onSelect={(selectedItem, index) => console.log(selectedItem, index)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            rowTextForSelection={(item, index) => item}
          />
          <SelectDropdown
            buttonStyle={{
              borderBottomWidth: 1,
              width: "80%",
              height: 35,
              borderColor: primaryBorderColor.borderColor,
            }}
            buttonTextStyle={{
              padding: 0,
              color: secondaryColor.color,
            }}
            data={seletions}
            onSelect={(selectedItem, i) => console.log(selectedItem, i)}
            buttonTextAfterSelection={(selectedItem, i) => selectedItem}
            rowTextForSelection={(item, i) => item}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
          }}
        >
          <View style={[contentInput, primaryBorderColor]}>
            <Text style={[labelText, secondaryColor]}>{""}</Text>
            <TextInput
              style={[input, textBase, secondaryColor, fontMedium]}
              keyboardType="default"
              placeholder="00"
              placeholderTextColor={secondaryColor.color}
              inputMode="text"
            />
          </View>
          <View style={[contentInput, primaryBorderColor]}>
            <Text style={[labelText, secondaryColor]}>#</Text>
            <TextInput
              style={[input, textBase, secondaryColor, fontMedium]}
              keyboardType="numeric"
              placeholder="00"
              placeholderTextColor={secondaryColor.color}
              inputMode="numeric"
            />
          </View>
          <View style={[contentInput, primaryBorderColor]}>
            <Text style={[labelText, secondaryColor]}>-</Text>
            <TextInput
              style={[input, textBase, secondaryColor, fontMedium]}
              keyboardType="default"
              placeholder="00"
              placeholderTextColor={secondaryColor.color}
              inputMode="text"
            />
          </View>
        </View>

        <View style={[contentDataForm]}>
          <TextInput
            style={[
              adicionalInpunt,
              primaryBorderColor,
              textBase,
              secondaryColor,
              fontMedium,
            ]}
            placeholder="District"
            placeholderTextColor={secondaryColor.color}
          />
          <TextInput
            style={[
              adicionalInpunt,
              primaryBorderColor,
              textBase,
              secondaryColor,
              fontMedium,
            ]}
            placeholder="Additional Infotmation"
            placeholderTextColor={secondaryColor.color}
          />
        </View>
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

    width: "100%",
    height: "80%",
  },
  allForms: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 2,

    borderRadius: 15,
  },
  contentFormDropdown: {
    width: "90%",
    marginVertical: 10,
  },
  input: {
    padding: 5,
  },
  labelText: {},
  contentInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    padding: 5,
    borderBottomWidth: 2,
  },
  contentDataForm: {
    padding: 5,
    marginVertical: 10,
  },

  contentBtns: {
    alignItems: "center",
    justifyContent: "center",
  },
  adicionalInpunt: { borderBottomWidth: 1, padding: 5, marginVertical: 10 },
});

const {
  allForms,
  container,
  input,
  contentInput,
  contentBtns,
  labelText,
  contentDataForm,
  adicionalInpunt,
  contentFormDropdown,
} = styles;

const { textBase, secondaryColor, fontMedium, primaryBorderColor, textLeft } =
  themes;
