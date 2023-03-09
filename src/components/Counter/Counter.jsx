import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";

export function Counter({ price }) {
  // al final, llegar al "count" al estodo global
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
          style={[tertiaryColor]}
          onPress={handleLess}
          disabled={count == 1}
        >
          <FontAwesome5
            name="minus-circle"
            size={28}
            color={count == 1 ? tertiaryColor.color : quinaryColor.color}
          />
        </TouchableOpacity>
        <CustomText style={[textCount, textBase]} fontF={"bold"}>
          {count}
        </CustomText>
        <TouchableOpacity
          style={[tertiaryColor]}
          onPress={handlePlus}
          disabled={count == 99}
        >
          <FontAwesome5
            name="plus-circle"
            size={28}
            color={count == 99 ? tertiaryColor.color : quaternaryColor.color}
          />
        </TouchableOpacity>
      </View>
      <View style={contentPrice}>
        <CustomText
          style={[textPrice, text2Xl, secondaryColor]}
          fontF={"semiBold"}
        >
          {price ? `$${sum()}K` : "Loading Price..."}
        </CustomText>
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
  textCount: {
    marginHorizontal: 7,
  },
});

const { container, contentPrice, contentCount, textPrice, textCount } = styles;

const {
  fontMedium,
  fontSemiBold,
  text2Xl,
  textBase,
  secondaryColor,
  quinaryColor,
  quaternaryColor,
  tertiaryColor,
} = themes;
