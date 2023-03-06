import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { themes } from "../../styles/themes";
import { DataCard } from "../DataCard/DataCard";
import { Loading } from "../Loading/Loading";
import { RenderList } from "../RenderList/RenderList";

export function ProductSlide({ type, data }) {
  return (
    <ScrollView>
      <View style={container}>
        <Text style={[title, text3Xl, fontBold, primaryColor]}>{type}</Text>
        <RenderList
          loading={Boolean(data.name)}
          component={(item) => <DataCard data={item.item} />}
          data={data}
          stringKey={(item) => `Slide-${item.name}`}
          horizontal={true}
          styles={{}}
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
    width: 500,
    maxWidth: "60%",
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
