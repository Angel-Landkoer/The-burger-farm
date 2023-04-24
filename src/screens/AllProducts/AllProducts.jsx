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
  heightPixel,
} from "../../styles/normalize";

export function AllProducts() {
  const findCategory = useSelector((state) => state.data.productsCategory);

  return (
    <ScrollView>
      <View style={[container, primaryBackground]}>
        <CustomText
          style={[title, primaryColor, textCenter]}
          fontF={"semiBold"}
        >{`${findCategory.type || "Name Section"}`}</CustomText>

        <RenderList
          data={findCategory.data || []}
          component={(item) => <DataCard data={item.item} />}
          stringKey={(item) => `AllProduct-${item.name}`}
          numColumns={3}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    minHeight: heightPixel(480),
  },
  title: {
    fontSize: fontPixel(18),

    paddingVertical: pixelSizeVertical(10),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
});

const { title, container } = styles;

const { primaryBackground, primaryColor, textCenter } = themes;
