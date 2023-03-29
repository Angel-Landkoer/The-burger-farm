import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ProductSlide } from "../../components/ProductSlide/ProductSlide";
import { themes } from "../../styles/themes";
import { filterCategory } from "../../store/globalData/actions/globalData.action";

export function Products({ navigation }) {
  const productsData = useSelector((state) => state.data.productsData);
  const data = useSelector((state) => state.data.productsCategoryName);
  const dispatch = useDispatch();

  const onChangeView = (category) => {
    dispatch(filterCategory(category));
    navigation.navigate("AllProductsStack");
  };

  return (
    <ScrollView>
      <View style={[containerFontBox, primaryBackground]}>
        {data.map((item, i) => (
          <ProductSlide
            key={`ProductList-${i}`}
            type={productsData[item].type}
            data={productsData[item].data}
            category={productsData[item].category}
            onChangeView={onChangeView}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
const { containerFontBox, primaryBackground } = themes;
