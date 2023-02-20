import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export function LoginCompleted() {
  return (
    <View>
      <Text>Information Genaral</Text>

      <View>
        <TouchableOpacity onPress={() => null}>
          <FontAwesome5 name="edit" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text>Name:</Text>
          <Text>{null}</Text>
        </View>
        <View>
          <Text>Phone:</Text>
          <Text>{null}</Text>
        </View>
        <View>
          <Text>Email:</Text>
          <Text>{null}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => null}>
          <FontAwesome5 name="plus-square" size={24} color="black" />
        </TouchableOpacity>
        <Text>Address</Text>
        <View>
          <Text>{""}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
