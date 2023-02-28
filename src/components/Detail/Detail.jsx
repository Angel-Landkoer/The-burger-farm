import React from "react";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Counter } from "../Counter/Counter";
import { themes } from "../../styles/themes";

export function Detail({ data }) {
  const { name, description, price, img } = data;

  return (
    <View style={container}>
      <Text style={[title, fontBold, text3Xl]}>{name}</Text>
      <Image
        style={picture}
        source={{ uri: "http://www.smashbros.com/images/og/pikachu.jpg" }}
      />
      <Text style={[descriptions, textJustify, textLg]}>{description}</Text>

      <TouchableOpacity
        style={[btnCustom, secondaryBackground]}
        onPress={() => null}
      >
        <Text style={[senaryColor, textCenter]}>
          Add or remove elements (customize)
        </Text>
      </TouchableOpacity>

      <Counter price={price} />

      <View style={containerDirection}>
        <TouchableOpacity style={[btnCancel, quaternaryBackground]}>
          <MaterialCommunityIcons
            name="close-circle"
            size={24}
            color={senaryColor.color}
          />
          <Text style={[textCenter, textSm, fontMedium, senaryColor]}>
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[btnAdd, tertiaryBackground]}>
          <FontAwesome5 name="cart-plus" size={24} color={senaryColor.color} />
          <Text style={[textCenter, textSm, fontMedium, senaryColor]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  descriptions: {
    padding: 10,
  },
  title: { alignSelf: "flex-start", paddingHorizontal: 25, marginBottom: 25 },
  picture: { width: 200, height: 200 },

  btnCustom: {
    width: "70%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 20,

    borderRadius: 50,
  },
  btnAdd: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 8,

    borderRadius: 20,
  },
  btnCancel: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 8,

    borderRadius: 20,
  },
  containerDirection: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "100%",
    marginVertical: 20,
  },
});

const {
  container,
  descriptions,
  title,
  btnCustom,
  btnAdd,
  btnCancel,
  picture,
  containerDirection,
} = styles;

const {
  textLg,
  textJustify,
  textCenter,
  text3Xl,
  textSm,
  fontBold,
  fontMedium,
  secondaryBackground,
  tertiaryBackground,
  quaternaryBackground,
  senaryColor,
} = themes;
