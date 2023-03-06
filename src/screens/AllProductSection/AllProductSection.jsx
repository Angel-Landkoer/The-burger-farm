import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { datas } from "../../utils/data";
import { themes } from "../../styles/themes";
import { DataCard } from "../../components/DataCard/DataCard";
import { RenderList } from "../../components/RenderList/RenderList";

export function AllProductSection() {
  const { burgers } = datas;
  //
  return (
    <ScrollView>
      <View style={[container, primaryBackground]}>
        <RenderList
          data={burgers.data}
          component={(item) => <DataCard data={item.item} />}
          stringKey={(item) => `AllProduct-${item.name}`}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    marginVertical: Constants.statusBarHeight,
  },
});

const { container } = styles;

const { primaryBackground } = themes;
