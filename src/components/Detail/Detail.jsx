import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import { Counter } from "../Counter/Counter";
import { addItemCart } from "../../store/cartSistem/actions/cartSistem.action";

export function Detail({ data, goToBack }) {
  const {
    name,
    description,
    price,
    img = "http://www.smashbros.com/images/og/pikachu.jpg",
  } = data;

  const dispatch = useDispatch();

  const handleCaptureItem = (item) => dispatch(addItemCart(item));
  return (
    <View style={container}>
      <CustomText style={[title, text3Xl, primaryColor]} fontF={"bold"}>
        {name}
      </CustomText>
      <Image style={picture} source={{ uri: img }} />
      <CustomText
        style={[descriptions, textJustify, textLg, primaryColor]}
        fontF={"medium"}
      >
        {description}
      </CustomText>
      <TouchableOpacity style={[btnCustom, secondaryBackground]}>
        <CustomText
          style={[senaryColor, textCenter, textBase]}
          fontF={"semiBold"}
        >
          Add or remove elements (customize)
        </CustomText>
      </TouchableOpacity>

      <Counter price={price} />

      <View style={containerDirection}>
        <TouchableOpacity
          style={[btnCancel, quaternaryBackground]}
          onPress={() => goToBack()}
        >
          <MaterialCommunityIcons
            name="close-circle"
            size={24}
            color={senaryColor.color}
          />
          <CustomText
            style={[textCenter, textBase, fontMedium, senaryColor]}
            fontF={"semiBold"}
          >
            Cancel
          </CustomText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[btnAdd, tertiaryBackground]}
          onPress={() => handleCaptureItem(data)}
        >
          <FontAwesome5 name="cart-plus" size={24} color={senaryColor.color} />
          <CustomText
            style={[textCenter, textBase, fontMedium, senaryColor]}
            fontF={"semiBold"}
          >
            Add to Cart
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },
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
  textBase,
  fontMedium,
  primaryColor,
  secondaryBackground,
  tertiaryBackground,
  quaternaryBackground,
  senaryColor,
} = themes;
