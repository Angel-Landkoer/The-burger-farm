import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { themes } from "../../styles/themes";
import { DataCard } from "../DataCard/DataCard";
import { Loading } from "../Loading/Loading";

export function ProductSlide({ type, data }) {
  return (
    <ScrollView>
      <View style={container}>
        <Text style={[title, text3Xl, fontBold, primaryColor]}>{type}</Text>
        <FlatList
          data={data}
          renderItem={(item) =>
            item.item ? (
              <DataCard data={item.item} />
            ) : (
              <Loading color={`#aaa`} />
            )
          }
          keyExtractor={(item) => `Slide-${item.name}`}
          horizontal
        />
        <TouchableOpacity
          style={[btn, primaryBorderColor]}
          onPress={() => console.warn("Redirecting")}
        >
          <Text
            style={[btnTitle, textBase, textCenter, fontMedium, primaryColor]}
          >
            See complete list
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,

    borderColor: "black",
  },
  title: {
    marginBottom: 10,
  },

  btn: {
    width: 200,
    padding: 3,
    marginTop: 15,
    borderWidth: 2,

    borderRadius: 20,
  },
  btnTitle: {},
});

const { container, btn, btnTitle, title } = styles;

const {
  textBase,
  fontMedium,
  textCenter,
  text3Xl,
  fontBold,
  primaryBorderColor,
  primaryColor,
} = themes;
