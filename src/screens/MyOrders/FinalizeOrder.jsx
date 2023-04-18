import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";

export function FinalizeOrder({ navigation }) {
  const dataPayment = ["Money", "Card"];

  return (
    <ScrollView>
      <View style={[container, primaryBackground]}>
        <View style={[contentTitle]}>
          <CustomText style={[text4Xl, primaryColor]} fontF={"bold"}>
            PERSONAL DATA
          </CustomText>
          <View style={[subContainer]}>
            <CustomText
              style={[subTitle, secondaryColor, text2Xl]}
              fontF={"bold"}
            >
              Name:
            </CustomText>
            <CustomText style={[styleText, textXl]} fontF={"semiBold"}>
              {"Como estas"}
            </CustomText>
          </View>
          <View style={[subContainer]}>
            <CustomText
              style={[subTitle, secondaryColor, text2Xl]}
              fontF={"bold"}
            >
              Phone:
            </CustomText>
            <CustomText style={[styleText, textXl]} fontF={"semiBold"}>
              {"Como estas"}
            </CustomText>
          </View>

          <View style={[subContainer]}>
            <CustomText
              style={[subTitle, secondaryColor, text2Xl]}
              fontF={"bold"}
            >
              Address:
            </CustomText>
            <View
              style={[{ width: "100%", borderWidth: 2 }, primaryBorderColor]}
            >
              <CustomText style={[styleText, textXl]} fontF={"semiBold"}>
                {"Como estasComo estasComo estasComo estasComo estas"}
              </CustomText>
            </View>
          </View>
        </View>

        <View style={[contentTitle]}>
          <CustomText style={[text4Xl, primaryColor]} fontF={"bold"}>
            PAYMENT INFORMATION
          </CustomText>
          <View style={[subContainer]}>
            <CustomText
              style={[subTitle, secondaryColor, text2Xl]}
              fontF={"bold"}
            >
              TOTAL:
            </CustomText>
            <CustomText style={[styleText, textXl]} fontF={"semiBold"}>
              {"Como estas"}
            </CustomText>
          </View>
          <View style={[subContainer]}>
            <CustomText
              style={[subTitle, secondaryColor, text2Xl]}
              fontF={"bold"}
            >
              Pay:
            </CustomText>
            <SelectDropdown
              buttonStyle={selectDropdowns}
              buttonTextStyle={selectDropdownText}
              data={dataPayment}
              onSelect={(selectedItem, index) => console.log(selectedItem)}
              buttonTextAfterSelection={(selectedItem, index) => (
                <CustomText
                  key={`Dropdown-${index}`}
                  style={[primaryColor]}
                  fontF={"semiBold"}
                >
                  {selectedItem}
                </CustomText>
              )}
              rowTextForSelection={(item, index) => (
                <CustomText
                  key={`rowTextFor-${index}`}
                  style={[primaryColor]}
                  fontF={"semiBold"}
                >
                  {item}
                </CustomText>
              )}
            />
          </View>

          <View style={[subContainer]}>
            <CustomText
              style={[subTitle, secondaryColor, text2Xl]}
              fontF={"bold"}
            >
              ADDITIONAL:
            </CustomText>
            <TextInput
              style={[styleText, textXl, styleInput]}
              autoCapitalize="none"
              inputMode="text"
              keyboardType="default"
              placeholder="Enter additional information that you consider important in your order"
              multiline
              numberOfLines={3}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[secondaryBackground, btn]}
          onPress={() => console.log("Sent Finalize Order")}
        >
          <MaterialIcons
            name="attach-money"
            size={36}
            color={senaryColor.color}
          />
          <CustomText style={[textBtn, text3Xl, senaryColor]} fontF={"bold"}>
            Finalize Order
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",

    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 13,
    width: "100%",
  },
  contentTitle: { marginTop: 10, paddingVertical: 5 },
  subContainer: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  subTitle: {},
  styleText: {},
  selectDropdowns: {
    alignItems: "flex-start",
    justifyContent: "center",
    width: 140,
    height: 30,
    borderWidth: 2,

    borderColor: "#CD973D",
    borderRadius: 20,
  },
  selectDropdownText: {
    fontWeight: "700",

    color: "#54423A",
  },
  styleInput: { height: 100, width: 200, borderWidth: 1, padding: 4 },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

    width: "100%",
    marginTop: 25,
    paddingTop: 10,

    borderRadius: 20,
  },
  textBtn: {},
});

const {
  btn,
  textBtn,
  subTitle,
  container,
  styleText,
  styleInput,
  contentTitle,
  subContainer,
  selectDropdowns,
  selectDropdownText,
} = styles;

const {
  primaryBackground,
  secondaryBackground,
  primaryBorderColor,
  secondaryColor,
  primaryColor,
  senaryColor,
  textXl,
  text2Xl,
  text3Xl,
  text4Xl,
} = themes;
