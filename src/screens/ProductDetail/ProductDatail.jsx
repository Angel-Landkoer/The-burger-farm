import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Detail } from "../../components/Detail/Detail";
import { datas } from "../../utils/data";
import { themes } from "../../styles/themes";

export function ProductDatail() {
  const { burgers } = datas;
  const dataObject = burgers.data;
  const data = dataObject[3];

  return (
    <ScrollView>
      <View style={[containerFontBox, primaryBackground]}>
        <Detail data={data} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
const { containerFontBox, primaryBackground } = themes;
