import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { themes } from "../../styles/themes";
import { DataCard } from "../DataCard/DataCard";
import { RenderList } from "../RenderList/RenderList";
import { CustomText } from "../../components/CustomText/CustomText";
import {
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  widthPixel,
  heightPixel,
} from "../../styles/normalize";

export function ProductSlide({ type, data, onChangeView, category }) {
  return (
    <ScrollView>
      <View style={[container, secondaryBorderColor]}>
        <CustomText style={[title, primaryColor]} fontF={"bold"}>
          {type}
        </CustomText>
        <RenderList
          component={({ item }) => <DataCard data={item} />}
          data={data}
          stringKey={(item) => `Slide-${item.name}`}
          horizontal={true}
          styles={{}}
        />
        <TouchableOpacity
          style={[btn, primaryBorderColor]}
          onPress={() => onChangeView(category)}
        >
          <CustomText
            style={[btnTitle, , textCenter, primaryColor]}
            fontF={"bold"}
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
    paddingVertical: pixelSizeVertical(6),
    borderBottomWidth: 1.2,
    borderTopWidth: 1.2,
  },
  title: {
    fontSize: fontPixel(16),
    marginVertical: pixelSizeVertical(10),
  },

  btn: {
    width: widthPixel(200),
    paddingVertical: pixelSizeVertical(2),
    paddingHorizontal: pixelSizeHorizontal(2),
    marginTop: 15,
    borderWidth: 2,

    borderRadius: 20,
  },
  btnTitle: {
    fontSize: fontPixel(10),
  },
});

const { container, btn, btnTitle, title } = styles;

const { textCenter, primaryBorderColor, primaryColor, secondaryBorderColor } =
  themes;
