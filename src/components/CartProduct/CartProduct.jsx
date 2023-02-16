import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export function CartProduct() {
  return (
    <View>
      <View>
        <Image
          source={{
            uri: "",
          }}
        />
      </View>
      <View>
        <Button color={`red`} onPress={() => null} title="-" />
        <Text>{}</Text>
        <Button color={`green`} onPress={() => null} title="+" />
      </View>

      <View>
        <Text>Product</Text>
        <Text>Price</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
