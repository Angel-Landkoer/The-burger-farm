import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export function FormDataSignUp() {
  return (
    <View>
      <Text>Sign Up</Text>
      <View>
        <Text>Phone Number</Text>
        <TextInput
          placeholder="Your phone number"
          inputMode="number"
          keyboardType="phone-pad"
          maxLength={10}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Your password"
          inputMode="text"
          keyboardType="default"
        />
        <Text>Confirm Password</Text>
        <TextInput
          placeholder="Your password"
          inputMode="text"
          keyboardType="default"
        />
      </View>
      <TouchableOpacity>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
