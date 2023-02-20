import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export function Detail() {
  return (
    <View>
      <Text>Name - Product</Text>
      <Image source={{ uri: "" }} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        quos molestias adipisci itaque sint libero, dicta eveniet nihil
        laudantium tenetur!
      </Text>
      <TouchableOpacity>
        <Text>Add or remove elements (customize)</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => null}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>{}</Text>
        <TouchableOpacity onPress={() => null}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Price</Text>
      </View>
      <View>
        <TouchableOpacity>
          <MaterialIcons name="cancel" size={24} color="black" />
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="cart-plus" size={24} color="black" />
          <Text>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
