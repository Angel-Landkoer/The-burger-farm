import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import { Counter } from "../Counter/Counter";
import { addItemCart } from "../../store/cartSistem/actions/cartSistem.action";
import {
  widthPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";
import { Loading } from "../Loading/Loading";

export function Detail({ data, goToBack }) {
  const { name, description, price, img } = data;

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
    const { name, price, img } = item;
    goToBack();
    dispatch(addItemCart({ name, price, img, count: counter.count }));
  };

  return (
    <View style={container}>
      <CustomText style={[title, , primaryColor]} fontF={"bold"}>
        {name}
      </CustomText>
      {img ? (
        <Image style={picture} source={{ uri: img }} />
      ) : (
        <Loading color={primaryColor.color} styleContainer={picture} />
      )}

      <CustomText
        style={[descriptions, textJustify, , primaryColor]}
        fontF={"medium"}
      >
        {description}
      </CustomText>
      <TouchableOpacity style={[btnCustom, secondaryBackground]}>
        <CustomText
          style={[textBtnCustom, senaryColor, textCenter]}
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
        <CustomText style={[textCount]} fontF={"bold"}>
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
            style={[textCenter, fontMedium, senaryColor]}
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
            style={[textCenter, fontMedium, senaryColor]}
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
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),

    fontSize: fontPixel(10),
  },
  title: {
    alignSelf: "flex-start",

    paddingHorizontal: pixelSizeHorizontal(20),
    marginBottom: 25,

    fontSize: fontPixel(18),
  },
  picture: { width: 200, height: 200 },

  btnCustom: {
    width: "70%",
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(5),
    marginVertical: pixelSizeVertical(15),

    borderRadius: 50,
  },
  textBtnCustom: {
    fontSize: fontPixel(9),
  },
  btnAdd: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    minWidth: 150,
    width: widthPixel(130),
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(4),

    borderRadius: 20,
  },
  btnCancel: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    minWidth: 100,
    width: widthPixel(90),
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(4),

    borderRadius: 20,
  },
  containerDirection: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "100%",
    marginVertical: pixelSizeVertical(15),
  },
  textCount: {
    marginHorizontal: pixelSizeHorizontal(3.5),

    fontSize: fontPixel(9),
  },
});

const {
  container,
  descriptions,
  title,
  btnCustom,
  textBtnCustom,
  btnAdd,
  btnCancel,
  picture,
  containerDirection,
  textCount,
} = styles;

const {
  textJustify,
  textCenter,
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
