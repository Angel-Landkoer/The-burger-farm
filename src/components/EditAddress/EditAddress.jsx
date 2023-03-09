import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { themes } from "../../styles/themes";
import { ButtonSaveClose } from "../ButtonSaveClose/ButtonSaveClose";
import { CustomText } from "../CustomText/CustomText";

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
            buttonStyle={selectDropdowns}
            buttonTextStyle={selectDropdownText}
            data={countries}
            onSelect={(selectedItem, index) => console.log(selectedItem, index)}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            rowTextForSelection={(item, index) => item}
          />
          <SelectDropdown
            buttonStyle={selectDropdowns}
            buttonTextStyle={selectDropdownText}
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
            <CustomText style={[labelText, secondaryColor]} fontF={"bold"}>
              {""}
            </CustomText>
            <TextInput
              style={[input, textLg, secondaryColor, fontBold]}
              keyboardType="default"
              placeholder="00"
              placeholderTextColor={secondaryColor.color}
              inputMode="text"
            />
          </View>
          <View style={[contentInput, primaryBorderColor]}>
            <CustomText style={[labelText, secondaryColor]} fontF={"bold"}>
              #
            </CustomText>
            <TextInput
              style={[input, textLg, secondaryColor, fontBold]}
              keyboardType="numeric"
              placeholder="00"
              placeholderTextColor={secondaryColor.color}
              inputMode="numeric"
            />
          </View>
          <View style={[contentInput, primaryBorderColor]}>
            <CustomText style={[labelText, secondaryColor]} fontF={"bold"}>
              -
            </CustomText>
            <TextInput
              style={[input, textLg, secondaryColor, fontBold]}
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
              textLg,
              secondaryColor,
              fontBold,
            ]}
            placeholder="District"
            placeholderTextColor={secondaryColor.color}
          />
          <TextInput
            style={[
              adicionalInpunt,
              primaryBorderColor,
              textLg,
              secondaryColor,
              fontBold,
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
  selectDropdowns: {
    width: "80%",
    height: 35,
    borderBottomWidth: 1,

    borderColor: "#CD973D",
  },
  selectDropdownText: {
    padding: 0,

    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
    textAlign: "center",

    color: "#CD973D",
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
  selectDropdowns,
  selectDropdownText,
} = styles;

const { textLg, secondaryColor, fontBold, primaryBorderColor } = themes;
