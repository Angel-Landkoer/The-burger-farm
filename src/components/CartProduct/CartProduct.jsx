import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { Counter } from "../Counter/Counter";
import { CustomText } from "../CustomText/CustomText";

export function CartProduct({ data }) {
  const {
    name,
    price,
    img = "https://w0.peakpx.com/wallpaper/883/296/HD-wallpaper-hatake-kakashi-artwork-naruto-characters-manga-sharingan-samurai-portrait-naruto-kakashi-hatake.jpg",
  } = data;

  return (
    <View style={container}>
      <View style={contentImg}>
        <Image style={picture} source={{ uri: img }} />
      </View>
      <View
        style={{
          alignItems: "flex-end",
          justifyContent: "center",
          width: "70%",
          padding: 10,
        }}
      >
        <View style={contentProductName}>
          <CustomText
            style={[productName, text3Xl, textCenter, primaryColor]}
            fontF={"bold"}
          >
            {name}
          </CustomText>
        </View>
        <Counter price={price} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    maxWidth: "100%",
    padding: 10,
    borderBottomWidth: 1,
  },
  contentImg: {
    width: 100,
    height: 100,
  },
  picture: {
    width: 130,
    height: 130,
  },
  contentProductName: {
    alignItems: "center",
    justifyContent: "center",

    width: "80%",

    marginBottom: 33,
  },
  productName: {},
});

const { container, contentImg, picture, contentProductName, productName } =
  styles;

const { text3Xl, textCenter, primaryColor, tertiaryColor } = themes;
