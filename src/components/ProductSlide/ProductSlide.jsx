import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { themes } from "../../styles/themes";
import { DataCard } from "../DataCard/DataCard";
import { RenderList } from "../RenderList/RenderList";
import { CustomText } from "../../components/CustomText/CustomText";

export function ProductSlide({ type, data }) {
  return (
    <ScrollView>
      <View style={container}>
        <CustomText style={[title, text3Xl, primaryColor]} fontF={"bold"}>
          {type}
        </CustomText>
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
          <CustomText
            style={[btnTitle, textBase, textCenter, primaryColor]}
            fontF={"medium"}
          >
            See complete list
          </CustomText>
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
  textCenter,
  text3Xl,
  primaryBorderColor,
  primaryColor,
} = themes;
