import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";

export function LoginCompleted() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <CustomText style={[title, text4Xl]} fontF={"bold"}>
        Information Genaral
      </CustomText>
      <View style={infoUser}>
        <TouchableOpacity style={btnEditUser} onPress={() => null}>
          <FontAwesome5 name="edit" size={32} color={secondaryColor.color} />
        </TouchableOpacity>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"regular"}>Name:</CustomText>
          <CustomText fontF={"regular"}>{"null"}</CustomText>
        </View>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"regular"}>Phone:</CustomText>
          <CustomText fontF={"regular"}>{"null"}</CustomText>
        </View>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"regular"}>Email:</CustomText>
          <CustomText fontF={"regular"}>{"null"}</CustomText>
        </View>
      </View>

      <TouchableOpacity style={btnCloseLogin} onPress={() => null}>
        <FontAwesome5
          name="window-close"
          size={45}
          color={quinaryColor.color}
        />
        <CustomText style={[text2Xl, quinaryColor]} fontF={"medium"}>
          Deleted Account
        </CustomText>
      </TouchableOpacity>

      <View style={infoAddress}>
        <CustomText style={[addressTitle, text2Xl]} fontF={"bold"}>
          Address
        </CustomText>
        <TouchableOpacity style={btnEditAddress} onPress={() => null}>
          <FontAwesome5
            name="plus-square"
            size={32}
            color={secondaryColor.color}
          />
        </TouchableOpacity>
        <View style={[subCotainerInfoAddress, primaryBorderColor]}>
          <CustomText style={[addressText]} fontF={"regular"}>
            {"AddressText"}
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",

    width: "70%",
  },
  infoUser: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",

    width: "100%",
    padding: 10,
    marginVertical: 40,

    borderColor: "black",
  },
  infoAddress: {
    width: "100%",
    padding: 10,
    marginVertical: 40,
  },
  addressTitle: {
    alignSelf: "flex-start",
  },
  btnEditUser: {
    position: "absolute",
    left: "95%",
    top: -30,
  },
  btnEditAddress: {
    position: "absolute",
    left: "90%",
    top: "30%",
  },
  subCotainerInfoUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 10,
    width: "100%",
    borderWidth: 1,
  },
  subCotainerInfoAddress: {
    alignItems: "flex-start",
    justifyContent: "center",

    width: "100%",
    padding: 10,
    marginVertical: 15,
    borderBottomWidth: 1,
  },
  addressText: {
    paddingHorizontal: 3,
  },
  btnCloseLogin: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
});

const {
  title,
  infoUser,
  infoAddress,
  addressTitle,
  btnEditUser,
  btnEditAddress,
  subCotainerInfoUser,
  subCotainerInfoAddress,
  addressText,
  btnCloseLogin,
} = styles;

const {
  containerFontBox,
  primaryBackground,
  text4Xl,
  text2Xl,
  secondaryColor,
  primaryBorderColor,
  quinaryColor,
} = themes;
