import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../themes";

export function LoginCompleted() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Text style={title}>Information Genaral</Text>

      <View style={infoUser}>
        <TouchableOpacity style={btnEditUser} onPress={() => null}>
          <FontAwesome5 name="edit" size={32} color="#E0B973" />
        </TouchableOpacity>
        <View style={[subCotainerInfoUser]}>
          <Text>Name:</Text>
          <Text>{"null"}</Text>
        </View>
        <View style={[subCotainerInfoUser]}>
          <Text>Phone:</Text>
          <Text>{"null"}</Text>
        </View>
        <View style={[subCotainerInfoUser]}>
          <Text>Email:</Text>
          <Text>{"null"}</Text>
        </View>
      </View>

      <TouchableOpacity style={btnCloseLogin} onPress={() => null}>
        <FontAwesome5 name="window-close" size={45} color="red" />
        <Text style={btnCloseLoginText}>Deleted Account</Text>
      </TouchableOpacity>

      <View style={infoAddress}>
        <Text style={addressTitle}>Address</Text>
        <TouchableOpacity style={btnEditAddress} onPress={() => null}>
          <FontAwesome5 name="plus-square" size={32} color="#E0B973" />
        </TouchableOpacity>
        <View style={subCotainerInfoAddress}>
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

    fontSize: 35,
    fontWeight: "700",
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

    fontSize: 30,
    fontWeight: "700",
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

    borderColor: "#E0B973",
  },
  subCotainerInfoAddress: {
    alignItems: "flex-start",
    justifyContent: "center",

    width: "100%",
    padding: 10,
    marginVertical: 15,
    borderBottomWidth: 1,

    borderColor: "#E0B973",
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
  btnCloseLoginText: {
    fontSize: 22,
    fontWeight: "500",

    color: "red",
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
  btnCloseLoginText,
} = styles;

const { containerFontBox, primaryBackground } = themes;
