import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { themes } from "../../styles/themes";

export function EditDataUser() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Text>Information Gerenal</Text>
      <View>
        <TextInput
          placeholder="Name"
          autoComplete="name"
          inputMode="text"
          keyboardType="default"
        />
        <TextInput
          placeholder="Last name"
          autoComplete="name"
          inputMode="text"
          keyboardType="default"
        />
        <TextInput
          placeholder="Phone"
          autoComplete="tel"
          inputMode="tel"
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Email"
          autoComplete="email"
          inputMode="email"
          keyboardType="email-address"
        />
      </View>

      <View>
        <TouchableOpacity onPress={() => null}>
          <Text>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => null}>
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground } = themes;
