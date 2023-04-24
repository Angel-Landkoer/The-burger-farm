import { StyleSheet, View } from "react-native";
import React from "react";
import { Detail } from "../../components/Detail/Detail";
import { themes } from "../../styles/themes";
import { pixelSizeHorizontal } from "../../styles/normalize";

export function ProductDetail({ route, navigation }) {
  const { data } = route.params;

  const goToBack = () => navigation.goBack();

  return (
    <>
      <View style={[container, primaryBackground]}>
        <Detail goToBack={goToBack} data={data} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: pixelSizeHorizontal(10),
  },
});

const { container } = styles;
const { primaryBackground } = themes;
