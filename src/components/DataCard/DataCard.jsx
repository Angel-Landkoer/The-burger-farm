import React from "react";
import { Image, StyleSheet, View, TouchableNativeFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import {
  fontPixel,
  pixelSizeVertical,
  widthPixel,
} from "../../styles/normalize";
import { Loading } from "../Loading/Loading";

export function DataCard({ data }) {
  const { name, price, img } = data;

  const { navigate } = useNavigation();

  const route = (item) => navigate("ProductDetailStack", { data: item });

  return (
    <TouchableNativeFeedback onPress={() => route(data)}>
      <View style={container}>
        <CustomText style={[nameText, primaryColor, textCenter]} fontF={"bold"}>
          {name}
        </CustomText>
        {img ? (
          <Image
            style={[styleImg, secondaryBorderColor]}
            source={{
              uri: img
            }}
          />
        ) : (
          <Loading color={primaryColor.color} styleContainer={styleImg} />
        )}

        <CustomText style={[priceText, secondaryColor]} fontF={"semiBold"}>
          ${price / 1000}k
        </CustomText>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-end",

    width: widthPixel(110),
    paddingVertical: pixelSizeVertical(10)
  },

  priceText: {
    marginTop: 7,

    fontSize: fontPixel(10)
  },
  nameText: {
    width: "70%",
    maxheight: 25,
    marginBottom: 7,

    fontSize: fontPixel(8)
  },
  styleImg: {
    width: 100,
    height: 100,
    borderWidth: 1.2
  }
});

const { container, styleImg, nameText, priceText } = styles;

const { textCenter, primaryColor, secondaryColor, secondaryBorderColor } =
  themes;
