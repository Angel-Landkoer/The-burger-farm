import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import {
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";
import { Loading } from "../Loading/Loading";

export function CartProduct({ data, onDeletedItem }) {
  const { name = "Name", count, price = 0, img } = data;

  const math = (price / 1000) * count;

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={() => onDeletedItem(data)}>
        <View style={[contentIcon, contentIconDeleted]}>
          <MaterialIcons name="delete" size={24} color={quinaryColor.color} />
        </View>
      </TouchableWithoutFeedback>
      <View style={contentImg}>
        {img ? (
          <Image style={picture} source={{ uri: img }} />
        ) : (
          <Loading color={primaryColor.color} styleContainer={picture} />
        )}
      </View>
      <View
        style={{
          alignItems: "flex-end",
          justifyContent: "center",
          width: "70%",
          paddingVertical: pixelSizeVertical(5),
          paddingHorizontal: pixelSizeVertical(5),
        }}
      >
        <View style={contentProductName}>
          <CustomText
            style={[productName, textCenter, primaryColor]}
            fontF={"bold"}
          >
            {name}
          </CustomText>
        </View>

        <View style={[contentPriceAndCount]}>
          <View style={[contentCount]}>
            <CustomText style={[textCount, primaryColor]} fontF={"bold"}>
              Count: {count}
            </CustomText>
          </View>
          <CustomText style={[textPrice, secondaryColor]} fontF={"semiBold"}>
            Price: {math ? `${math}K` : "Loading..."}
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    maxWidth: "100%",
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),
    borderBottomWidth: 1,
  },
  contentImg: {
    width: 130,
    height: 130,
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
  productName: {
    fontSize: fontPixel(13),
  },
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
  contentPriceAndCount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

    width: "100%",
  },
  contentCount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    width: "50%",
    marginHorizontal: pixelSizeHorizontal(5),
  },
  textCount: {
    marginHorizontal: pixelSizeHorizontal(3.5),

    fontSize: fontPixel(10),
  },
  textPrice: { fontSize: fontPixel(10) },
});

const {
  container,
  contentImg,
  picture,
  contentProductName,
  productName,
  contentIconDeleted,
  contentIcon,
  textCount,
  contentCount,
  contentPriceAndCount,
  textPrice,
} = styles;

const { textCenter, primaryColor, quinaryColor, secondaryColor } = themes;
