import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Counter({ price }) {
  return (
    <View style={container}>
      <View style={contentCount}>
        <TouchableOpacity style={btnLess} onPress={() => null}>
          <FontAwesome5 name="minus" size={24} color="red" />
        </TouchableOpacity>
        <Text style={textCount}>{1}</Text>
        <TouchableOpacity style={btnPlus} onPress={() => null}>
          <FontAwesome5 name="plus" size={24} color="green" />
        </TouchableOpacity>
      </View>
      <View style={contentPrice}>
        <Text style={textPrice}>{price ? (`$${price / 1000}K`) : "Loading Price..."}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    width: "80%",
  },
  contentCount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    width: "50%",
    marginHorizontal: 10,
  },
  contentPrice: {},
  textPrice: {
    fontSize: 15,
    fontWeight: "500",
  },
  textCount: {
    fontSize: 15,
    fontWeight: "500",
  },
  btnLess: {},
  btnPlus: {},
});

const {
  container,
  contentPrice,
  contentCount,
  btnLess,
  btnPlus,
  textPrice,
  textCount,
} = styles;
