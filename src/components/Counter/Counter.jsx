import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { themes } from "../../themes";

export function Counter({ price }) {
  const [count, setCount] = useState(1);

  const handlePlus = () => (count >= 99 ? setCount(99) : setCount(count + 1));
  const handleLess = () => (count <= 1 ? setCount(1) : setCount(count - 1));

  // function ubicado en el estado global al igual que el count-state
  const sum = () => {
    return (price / 1000) * count;
  };

  return (
    <View style={container}>
      <View style={contentCount}>
        <TouchableOpacity
          style={btnLess}
          onPress={handleLess}
          disabled={count == 1}
        >
          <FontAwesome5
            name="minus-circle"
            size={28}
            color={count == 1 ? "#aaa" : "red"}
          />
        </TouchableOpacity>
        <Text style={[textCount, textBase, fontMedium]}>{count}</Text>
        <TouchableOpacity
          style={btnPlus}
          onPress={handlePlus}
          disabled={count == 99}
        >
          <FontAwesome5
            name="plus-circle"
            size={28}
            color={count == 99 ? "#aaa" : "green"}
          />
        </TouchableOpacity>
      </View>
      <View style={contentPrice}>
        <Text style={[textPrice, text2Xl, fontSemiBold, secondaryColor]}>
          {price ? `$${sum()}K` : "Loading Price..."}
        </Text>
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
  textPrice: {},
  textCount: {},
  btnLess: {
    color: "#aaa",
  },
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

const { fontMedium, fontSemiBold, text2Xl, textBase, secondaryColor } = themes;
