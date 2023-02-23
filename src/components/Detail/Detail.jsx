import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export function Detail({ data }) {
  const { name, description, price, img } = data;

  return (
    <View style={container}>
      <Text style={title}>{name}</Text>
      <Image
        style={picture}
        source={{ uri: "http://www.smashbros.com/images/og/pikachu.jpg" }}
      />
      <Text style={descriptions}>{description}</Text>
      <TouchableOpacity style={btnCustom} onPress={() => null}>
        <Text style={btnText}>Add or remove elements (customize)</Text>
      </TouchableOpacity>

      <View style={containerCounter}>
        <TouchableOpacity style={btnLess} onPress={() => null}>
          <FontAwesome5 name="minus" size={24} color="white" />
        </TouchableOpacity>
        <Text>{0}</Text>
        <TouchableOpacity style={btnPlus} onPress={() => null}>
          <FontAwesome5 name="plus" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={viewPrice}>
        <Text style={textPrice}>${price / 1_000}k</Text>
      </View>

      <View style={containerDirection}>
        <TouchableOpacity style={btnCancel} onPress={() => null}>
          <MaterialIcons name="cancel" size={24} color="white" />
          <Text style={btnText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={btnAdd} onPress={() => null}>
          <FontAwesome5 name="cart-plus" size={24} color="white" />
          <Text style={btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", padding: 20 },
  descriptions: {
    padding: 10,
    textAlign: "justify",
    fontSize: 17,
    lineHeight: 23,
  },
  title: { alignSelf: "flex-start", fontSize: 30, fontWeight: "700" },
  picture: { width: 200, height: 200 },
  btnCustom: {
    width: 200,
    paddingHorizontal: 15,
    paddingVertical: 5,

    borderRadius: 15,
    backgroundColor: "#E0B973",
  },

  viewPrice: {
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  textPrice: { fontSize: 27, fontWeight: "600", color: "#E0B973" },
  containerCounter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    width: "30%",
  },
  btnAdd: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: "50%",
    backgroundColor: "green",
  },
  btnText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",

    color: "white",
  },
  btnCancel: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,

    borderRadius: "50%",
    backgroundColor: "red",
  },

  btnLess: {
    alignItems: "center",
    justifyContent: "center",

    width: 35,
    height: 35,

    borderRadius: "50%",
    backgroundColor: "red",
  },
  btnPlus: {
    alignItems: "center",
    justifyContent: "center",

    width: 35,
    height: 35,

    borderRadius: "50%",
    backgroundColor: "green",
  },
  containerDirection: {
    flexDirection: "row",
    justifyContent: "space-around",

    width: "100%",
  },
});

const {
  container,
  descriptions,
  title,
  btnCustom,
  containerCounter,
  viewPrice,
  textPrice,
  btnAdd,
  btnCancel,
  picture,
  btnPlus,
  btnLess,
  containerDirection,
  btnText,
} = styles;
