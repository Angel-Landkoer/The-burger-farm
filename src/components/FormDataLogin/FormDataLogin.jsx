import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export function FormDataLogin() {
  const [numberPhoneValue, setNumberPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleChangePhoneValue = (e) => setNumberPhoneValue(e);
  const handleChangePasswordValue = (e) => setPasswordValue(e);

  //  useEffect, fireBase, confirm data, yes=true or not=false

  return (
    <View>
      <Text>FormDataLogin</Text>
      <View>
        <Text>Phone Number</Text>
        <TextInput
          placeholder="Your phone number"
          inputMode="number"
          keyboardType="phone-pad"
          maxLength={10}
          onChangeText={handleChangePhoneValue}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Your password"
          inputMode="text"
          keyboardType="default"
          onChangeText={handleChangePasswordValue}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => console.warn("Data confirm And redirection")}
        >
          <Text>Access</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.warn("Data confirm And redirection")}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
