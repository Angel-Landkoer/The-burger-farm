import { StyleSheet, View } from "react-native";
import React from "react";
import { Detail } from "../../components/Detail/Detail";
import { themes } from "../../styles/themes";

export function ProductDetail({ route, navigation }) {
  const { data } = route.params;

  const goToBack = () => navigation.goBack();

  return (
    <>
      <View style={[containerFontBox, primaryBackground]}>
        <Detail goToBack={goToBack} data={data} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
const { containerFontBox, primaryBackground } = themes;
