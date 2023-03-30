import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { Counter } from "../Counter/Counter";
import { CustomText } from "../CustomText/CustomText";

export function CartProduct({ data, onDeletedItem }) {
  const {
    name = "Name",
    price = 0,
    img = "https://w0.peakpx.com/wallpaper/883/296/HD-wallpaper-hatake-kakashi-artwork-naruto-characters-manga-sharingan-samurai-portrait-naruto-kakashi-hatake.jpg",
  } = data;

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={() => onDeletedItem(data)}>
        <View style={[contentIcon, contentIconDeleted]}>
          <MaterialIcons name="delete" size={24} color={quinaryColor.color} />
        </View>
      </TouchableWithoutFeedback>
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
  contentIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },
  contentIconDeleted: {
    left: 8,
    top: "3%",
  },
});

const {
  container,
  contentImg,
  picture,
  contentProductName,
  productName,
  contentIconDeleted,
  contentIcon,
} = styles;

const { text3Xl, textCenter, primaryColor, quinaryColor } = themes;
