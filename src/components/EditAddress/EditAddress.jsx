import React, { useReducer } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { themes } from "../../styles/themes";
import { ButtonSaveClose } from "../ButtonSaveClose/ButtonSaveClose";
import { CustomText } from "../CustomText/CustomText";
import { Modall } from "../Modal/Modall";

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

export function EditAddress() {
  const [state, dispatch] = useReducer(reducer, inicialState);

  const onSaveData = () => {
    const formulariesLength = [
      state.inputCity,
      state.inputRace,
      state.inputDirectionFirst,
      state.inputDirectionSecond,
      state.inputDirectionThird,
      state.inputDistrict,
      state.inputAdditional,
    ];

    const maxLength = formulariesLength.every((item) => item.length > 0);

    !maxLength && dispatch({ type: "CHANGETOGGLE" });
    maxLength && (dispatch({ type: "RESET" }), console.warn("Confirm Data"));
  };

  return (
    <View style={[container]}>
      <View style={[allForms, primaryBorderColor]}>
        <View style={[contentFormDropdown]}>
          <SelectDropdown
            buttonStyle={selectDropdowns}
            buttonTextStyle={selectDropdownText}
            data={countries}
            onSelect={(selectedItem, index) =>
              dispatch({ type: "INPUTCITY", payload: selectedItem })
            }
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            rowTextForSelection={(item, index) => item}
          />
          <SelectDropdown
            buttonStyle={selectDropdowns}
            buttonTextStyle={selectDropdownText}
            data={seletions}
            onSelect={(selectedItem, i) =>
              dispatch({ type: "INPUTRACE", payload: selectedItem })
            }
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
              value={state.inputDirectionFirst}
              onChangeText={(e) =>
                dispatch({ type: "DIRECTION-1", payload: e })
              }
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
              value={state.inputDirectionSecond}
              onChangeText={(e) =>
                dispatch({ type: "DIRECTION-2", payload: e })
              }
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
              value={state.inputDirectionThird}
              onChangeText={(e) =>
                dispatch({ type: "DIRECTION-3", payload: e })
              }
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
            value={state.inputDistrict}
            onChangeText={(e) =>
              dispatch({ type: "INPUTDISTRICT", payload: e })
            }
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
            value={state.inputAdditional}
            onChangeText={(e) =>
              dispatch({ type: "INPUTADDITIONAL", payload: e })
            }
          />
        </View>
      </View>
      <Modall text={"Please fill in all fields"} state={state.toggleModal}>
        <Pressable
          style={[modalBtn, septenaryBackground]}
          onPress={() => dispatch({ type: "CHANGETOGGLE" })}
        >
          <CustomText
            fontF={"semiBold"}
            style={[textModalBtn, senaryColor, textLg]}
          >
            Accept
          </CustomText>
        </Pressable>
      </Modall>
      <View style={[contentBtns]}>
        <ButtonSaveClose onSaveData={onSaveData} />
      </View>
    </View>
  );
}

const inicialState = {
  inputCity: "",
  inputRace: "",
  inputDirectionFirst: "",
  inputDirectionSecond: "",
  inputDirectionThird: "",
  inputDistrict: "",
  inputAdditional: "",
  toggleModal: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUTCITY":
      return { ...state, inputCity: action.payload };
    case "INPUTRACE":
      return { ...state, inputRace: action.payload };
    case "DIRECTION-1":
      return { ...state, inputDirectionFirst: action.payload };
    case "DIRECTION-2":
      return { ...state, inputDirectionSecond: action.payload };
    case "DIRECTION-3":
      return { ...state, inputDirectionThird: action.payload };
    case "INPUTDISTRICT":
      return { ...state, inputDistrict: action.payload };
    case "INPUTADDITIONAL":
      return { ...state, inputAdditional: action.payload };
    case "RESET":
      return {
        ...state,
        inputCity: "",
        inputRace: "",
        inputDirectionFirst: "",
        inputDirectionSecond: "",
        inputDirectionThird: "",
        inputDistrict: "",
        inputAdditional: "",
      };
    case "CHANGETOGGLE":
      return { ...state, toggleModal: !state.toggleModal };
    default:
      return state;
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",

    width: "100%",
    height: "70%",
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
  modalBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,

    borderRadius: 20,
  },
  textModalBtn: {},
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
  modalBtn,
  textModalBtn,
} = styles;

const {
  textLg,
  secondaryColor,
  fontBold,
  primaryBorderColor,
  senaryColor,
  septenaryBackground,
} = themes;
