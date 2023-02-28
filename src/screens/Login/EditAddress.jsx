import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { themes } from "../../themes";

// dato de los ciudades and departamentos

// EJ: Datos estaticos
const countries = [
  "Colombia",
  "Peru",
  "Argentina",
  "Bolivia",
  "Uruguai",
  "Mexico",
  "Canada",
  "Chile",
];

const seletions = ["select", "Street", "Race"];
//

export function EditAddress() {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      <Text>
        It is important that you are precise and detailed when entering your
        address, this will ensure that your order can be delivered in the
        shortest possible time. Additionally, if you can confirm your address on
        our map, it will be easier to deliver it.
      </Text>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => console.log(selectedItem, index)}
        buttonTextAfterSelection={(selectedItem, index) => selectedItem}
        rowTextForSelection={(item, index) => item}
      />
      <SelectDropdown
        data={seletions}
        onSelect={(selectedItem, i) => console.log(selectedItem, index)}
        buttonTextAfterSelection={(selectedItem, i) => selectedItem}
        rowTextForSelection={(item, i) => item}
      />

      <View>
        <View>
          <Text>{""}</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="00"
            inputMode="numeric"
          />
        </View>
        <View>
          <Text>#</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="00"
            inputMode="numeric"
          />
        </View>
        <View>
          <Text>-</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="00"
            inputMode="numeric"
          />
        </View>
      </View>
      <View>
        <TextInput placeholder="District" />
        <TextInput placeholder="Additional Infotmation" />
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
