import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";

export function LoginCompleted() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Text style={[title, fontBold, text4Xl]}>Information Genaral</Text>

      <View style={infoUser}>
        <TouchableOpacity style={btnEditUser} onPress={() => null}>
          <FontAwesome5 name="edit" size={32} color={secondaryColor.color} />
        </TouchableOpacity>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <Text>Name:</Text>
          <Text>{"null"}</Text>
        </View>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <Text>Phone:</Text>
          <Text>{"null"}</Text>
        </View>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <Text>Email:</Text>
          <Text>{"null"}</Text>
        </View>
      </View>

      <TouchableOpacity style={btnCloseLogin} onPress={() => null}>
        <FontAwesome5
          name="window-close"
          size={45}
          color={quinaryColor.color}
        />
        <Text style={[btnCloseLoginText, text2Xl, fontMedium, quinaryColor]}>
          Deleted Account
        </Text>
      </TouchableOpacity>

      <View style={infoAddress}>
        <Text style={[addressTitle, text2Xl, fontBold]}>Address</Text>
        <TouchableOpacity style={btnEditAddress} onPress={() => null}>
          <FontAwesome5
            name="plus-square"
            size={32}
            color={secondaryColor.color}
          />
        </TouchableOpacity>
        <View style={[subCotainerInfoAddress, primaryBorderColor]}>
          <Text style={addressText}>{"AddressText"}</Text>
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
  fontBold,
  text2Xl,
  fontMedium,
  secondaryColor,
  primaryBorderColor,
  quinaryColor,
} = themes;
