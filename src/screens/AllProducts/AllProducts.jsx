import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { CustomText } from "../../components/CustomText/CustomText";
import { themes } from "../../styles/themes";
import { RenderList } from "../../components/RenderList/RenderList";
import { DataCard } from "../../components/DataCard/DataCard";
import {
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
  widthPixel,
} from "../../styles/normalize";

export function AllProducts() {
  const findCategory = useSelector((state) => state.data.productsCategory);

  return (
    <View style={[container, primaryBackground]}>
      <CustomText
        style={[title, primaryColor, textCenter]}
        fontF={"semiBold"}
      >{`${findCategory.type || "Name Section"}`}</CustomText>

      <RenderList
        data={findCategory.data || []}
        component={(item) => <DataCard data={item.item} />}
        stringKey={(item) => `AllProduct-${item.name}`}
        styles={{ width: widthPixel(320), height: "100%" }}
        numColumns={3}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: fontPixel(20),

    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
});

const { title, container } = styles;

const { primaryBackground, primaryColor, textCenter } = themes;
