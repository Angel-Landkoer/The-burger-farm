import { StyleSheet, View,  } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { CustomText } from "../../components/CustomText/CustomText";
// import { datas } from "../../utils/data";
import { themes } from "../../styles/themes";
import { RenderList } from "../../components/RenderList/RenderList";
import { DataCard } from "../../components/DataCard/DataCard";

export function AllProducts() {
  // { route }

  const findCategory = useSelector(state => state.data.productsCategory);
  console.log("findCategory: ", findCategory);
  // const { category } = route.params;
  // const products = useSelector((state) => state.data.productsData);
  // const productsCategory = useSelector((state) => state.data.productsCategory);
  // const datas = productsCategory.map((item) => products[item]);
  // const findCategory = datas.find((item) => item.category == category);

  return (
    <View style={[containerFontBox, primaryBackground]}>
      <CustomText
        style={[title, primaryColor, text2Xl, textCenter]}
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
