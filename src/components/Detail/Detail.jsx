import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import { Counter } from "../Counter/Counter";
import { addItemCart } from "../../store/cartSistem/actions/cartSistem.action";
import { useState } from "react";

export function Detail({ data, goToBack }) {
  const {
    name,
    description,
    price,
    img = "http://www.smashbros.com/images/og/pikachu.jpg",
  } = data;

  const [counter, setCounter] = useState({
    count: 1,
    price,
  });

  const handlePlus = () => {
    const numPlus = counter.count >= 99;
    if (!numPlus) return setCounter({ ...counter, count: counter.count + 1 });
  };

  const handleLess = () => {
    const numLess = counter.count <= 1;
    if (!numLess) return setCounter({ ...counter, count: counter.count - 1 });
  };

  const dispatch = useDispatch();

  const handleCaptureItem = (item) => {
    const { name, price } = item;
    goToBack();
    dispatch(addItemCart({ name, price, count: counter.count }));
  };

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

      <Counter price={counter.price} count={counter.count}>
        <TouchableOpacity
          style={[tertiaryColor]}
          onPress={handleLess}
          disabled={counter.count == 1}
        >
          <FontAwesome5
            name="minus-circle"
            size={32}
            color={
              counter.count == 1 ? tertiaryColor.color : quinaryColor.color
            }
          />
        </TouchableOpacity>
        <CustomText style={[textCount, textBase]} fontF={"bold"}>
          {counter.count}
        </CustomText>
        <TouchableOpacity
          style={[tertiaryColor]}
          onPress={handlePlus}
          disabled={counter.count == 99}
        >
          <FontAwesome5
            name="plus-circle"
            size={32}
            color={
              counter.count == 99 ? tertiaryColor.color : quaternaryColor.color
            }
          />
        </TouchableOpacity>
      </Counter>

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
  textCount: {
    marginHorizontal: 7,
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
  textCount,
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
  tertiaryColor,
  quinaryColor,
  quaternaryColor,
} = themes;
