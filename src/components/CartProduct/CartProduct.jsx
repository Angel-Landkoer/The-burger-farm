import React from "react";
import { Counter } from "../Counter/Counter";
import { Image, StyleSheet, Text, View } from "react-native";
import { Loading } from "../Loading/Loading";
import { themes } from "../../themes";

export function CartProduct({ data }) {
  const {
    name,
    price,
    description,
    img = "https://w0.peakpx.com/wallpaper/883/296/HD-wallpaper-hatake-kakashi-artwork-naruto-characters-manga-sharingan-samurai-portrait-naruto-kakashi-hatake.jpg",
  } = data;

  return (
    <View style={container}>
      <View style={contentImg}>
        {img ? (
          <Image
            style={picture}
            source={{
              uri: img,
            }}
          />
        ) : (
          <Loading color={"#aaa"} />
        )}
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
          <Text
            style={[productName, text3Xl, textCenter, fontBold, primaryColor]}
          >
            {name}
          </Text>
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
    padding: 10,
    borderWidth: 1,
  },
  contentImg: {
    width: "30%",
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

const { text3Xl, textCenter, fontBold, primaryColor } = themes;
