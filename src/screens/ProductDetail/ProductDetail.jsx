import { StyleSheet, View } from "react-native";
import React from "react";
import { Detail } from "../../components/Detail/Detail";
import { datas } from "../../utils/data";
import { themes } from "../../styles/themes";

export function ProductDetail() {
  const { burgers } = datas;
  const dataObject = burgers.data;
  const data = dataObject[3];

  return (
    <>
      <View style={[containerFontBox, primaryBackground]}>
        <Detail data={data} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
const { containerFontBox, primaryBackground } = themes;
