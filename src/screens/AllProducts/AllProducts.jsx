import { StyleSheet, View } from "react-native";
import React from "react";
import { CustomText } from "../../components/CustomText/CustomText";
import { datas } from "../../utils/data";
import { themes } from "../../styles/themes";
import { RenderList } from "../../components/RenderList/RenderList";
import { DataCard } from "../../components/DataCard/DataCard";

export function AllProducts({ name = "Name Section" }) {
  const { burgers } = datas;

  return (
    <View style={[containerFontBox, primaryBackground]}>
      <CustomText
        style={[title, primaryColor, text2Xl, textCenter]}
        fontF={"semiBold"}
      >{`${name}`}</CustomText>

      <RenderList
        data={burgers.data}
        component={(item) => <DataCard data={item.item} />}
        stringKey={(item) => `AllProduct-${item.name}`}
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
  title: {
    padding: 10,
    marginBottom: 10,
  },
});

const { title } = styles;

const {
  containerFontBox,
  primaryBackground,
  primaryColor,
  text2Xl,
  textCenter,
} = themes;
