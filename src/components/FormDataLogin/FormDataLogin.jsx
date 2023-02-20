import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export function FormDataLogin() {
  return (
    <View>
      <Text>Login</Text>
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
      </View>

      <View>
        <TouchableOpacity>
          <Text>Access</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
