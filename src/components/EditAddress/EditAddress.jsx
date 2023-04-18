import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, TextInput, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { themes } from "../../styles/themes";
import { ButtonSaveClose } from "../ButtonSaveClose/ButtonSaveClose";
import { CustomText } from "../CustomText/CustomText";
import { Modall } from "../Modal/Modall";
import { updateDataAddress } from "../../store/authUser/actions/authUser.action";

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

export function EditAddress({ dataDefault, goToBack, userId }) {
  const [state, dispatch] = useReducer(reducer, inicialState);

  const dispatchRedux = useDispatch();

  const { additionalInformation, city, district, route, dataDirection } =
    dataDefault.address;

  const dataDirectionSplit = dataDirection.split(" ");

  const onSaveData = () => {
    const {
      formCity,
      formRace,
      formDirectionFirst,
      formDirectionSecond,
      formDirectionThird,
      formDistrict,
      formAdditional,
    } = state;

    const formulariesLength = [
      formCity,
      formRace,
      formDirectionFirst,
      formDirectionSecond,
      formDirectionThird,
      formDistrict,
      formAdditional,
    ];

    const maxLength = formulariesLength.every((item) => item.length > 0);

    const data = {
      city: formCity.trim(),
      additionalInformation: formAdditional.trim(),
      district: formDistrict.trim(),
      route: formRace.trim(),
      dataDirection:
        `${formDirectionFirst} #${formDirectionSecond} -${formDirectionThird}`.trim(),
    };

    if (maxLength) {
      dispatchRedux(updateDataAddress(userId, data));
      dispatch({ type: "@TOGGLE_MODAL_CORRECTLY" });
      goToBack();
    } else {
      dispatch({ type: "@TOGGLE_MODAL_ERRONEOUSLY" });
    }
  };

  const handleChangeValueFormCity = (e) =>
    dispatch({ type: "@CHANGE_FORMCITY", payload: e });
  const handleChangeValueFormRace = (e) =>
    dispatch({ type: "@CHANGE_FORMRACE", payload: e });
  const handleChangeValueFormDirection = (name, e) => {
    if (name == "@first")
      return dispatch({ type: "@CHANGE_FORMDIRECTION_FIRST", payload: e });
    if (name == "@second")
      return dispatch({ type: "@CHANGE_FORMDIRECTION_SECOND", payload: e });
    if (name == "@third")
      return dispatch({ type: "@CHANGE_FORMDIRECTION_THIRD", payload: e });
    return dispatch({ type: "@CHANGE_FORMDIRECTION", payload: e });
  };
  const handleChangeValueFormDistrict = (e) =>
    dispatch({ type: "@CHANGE_FORMDISTRICT", payload: e });
  const handleChangeValueFormAdditional = (e) =>
    dispatch({ type: "@CHANGE_FORMADDITIONAL", payload: e });

  const modalBtnError = [
    {
      textBtn: "ACCEPT",
      actionState: () => dispatch({ type: "@TOGGLE_MODAL_ERRONEOUSLY" }),
    },
  ];

  const modalBtnCorrect = [
    {
      textBtn: "OK",
      actionState: () => dispatch({ type: "@TOGGLE_MODAL_CORRECTLY" }),
    },
  ];

  return (
    <View style={[container]}>
      <View style={[allForms, primaryBorderColor]}>
        <View style={[contentFormDropdown]}>
          <SelectDropdown
            buttonStyle={selectDropdowns}
            buttonTextStyle={selectDropdownText}
            data={countries}
            onSelect={(selectedItem, index) =>
              handleChangeValueFormCity(selectedItem)
            }
            buttonTextAfterSelection={(selectedItem, index) => selectedItem}
            rowTextForSelection={(item, index) => item}
            defaultValue={city}
          />
          <SelectDropdown
            buttonStyle={selectDropdowns}
            buttonTextStyle={selectDropdownText}
            data={seletions}
            onSelect={(selectedItem, i) =>
              handleChangeValueFormRace(selectedItem)
            }
            buttonTextAfterSelection={(selectedItem, i) => selectedItem}
            rowTextForSelection={(item, i) => item}
            defaultValue={route}
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
              value={dataDirectionSplit[0] ? dataDirectionSplit[0] : state.formDirectionFirst}
              onChangeText={(e) => handleChangeValueFormDirection("@first", e)}
            />
          </View>
          <View style={[contentInput, primaryBorderColor]}>
            <CustomText style={[labelText, secondaryColor]} fontF={"bold"}>
              #
            </CustomText>
            <TextInput
              style={[input, textLg, secondaryColor, fontBold]}
              keyboardType="default"
              placeholder="00"
              placeholderTextColor={secondaryColor.color}
              inputMode="numeric"
              value={dataDirectionSplit[1] ? dataDirectionSplit[1] : state.formDirectionSecond}
              onChangeText={(e) => handleChangeValueFormDirection("@second", e)}
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
              value={dataDirectionSplit[2] ? dataDirectionSplit[2] : state.formDirectionThird}
              onChangeText={(e) => handleChangeValueFormDirection("@third", e)}
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
            value={district ? district : state.formDistrict}
            onChangeText={handleChangeValueFormDistrict}
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
            value={
              additionalInformation
                ? additionalInformation
                : state.formAdditional
            }
            onChangeText={handleChangeValueFormAdditional}
          />
        </View>
      </View>
      <Modall
        btns={modalBtnCorrect}
        state={state.toggleModalCorrectly}
        title={"Data successfully updated"}
      />
      <Modall
        btns={modalBtnError}
        state={state.toggleModalErroneously}
        title={"Please fill in all fields"}
      />
      <View style={[contentBtns]}>
        <ButtonSaveClose onGoToBack={goToBack} onSaveData={onSaveData} />
      </View>
    </View>
  );
}

const inicialState = {
  formCity: "",
  formRace: "",
  formDirectionFirst: "",
  formDirectionSecond: "",
  formDirectionThird: "",
  formDistrict: "",
  formAdditional: "",
  toggleModalCorrectly: false,
  toggleModalErroneously: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type == "@CHANGE_FORMCITY") return { ...state, formCity: payload };
  if (type == "@CHANGE_FORMRACE") return { ...state, formRace: payload };
  if (type == "@CHANGE_FORMDIRECTION_FIRST")
    return { ...state, formDirectionFirst: payload };
  if (type == "@CHANGE_FORMDIRECTION_SECOND")
    return { ...state, formDirectionSecond: payload };
  if (type == "@CHANGE_FORMDIRECTION_THIRD")
    return { ...state, formDirectionThird: payload };
  if (type == "@CHANGE_FORMDISTRICT")
    return { ...state, formDistrict: payload };
  if (type == "@CHANGE_FORMADDITIONAL")
    return { ...state, formAdditional: payload };
  if (type == "@RESET_FORMULARIES")
    return {
      ...state,
      formCity: "",
      formRace: "",
      formDirectionFirst: "",
      formDirectionSecond: "",
      formDirectionThird: "",
      formDistrict: "",
      formAdditional: "",
    };
  if (type == "@TOGGLE_MODAL_CORRECTLY")
    return { ...state, toggleModalCorrectly: !state.toggleModalCorrectly };

  if (type == "@TOGGLE_MODAL_ERRONEOUSLY")
    return { ...state, toggleModalErroneously: !state.toggleModalErroneously };
  return state;
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
