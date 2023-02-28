import React from "react";
import { themes } from "../../styles/themes";
import Constants from "expo-constants";
import { datas } from "../../utils/data";
import { DataCard } from "../../components/DataCard/DataCard";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

export function AllProductSection() {
  const { burgers } = datas;
  //
  return (
    <ScrollView>
      <View style={[container, primaryBackground]}>
        <FlatList
          data={burgers.data}
          renderItem={(item) => <DataCard data={item.item} />}
          keyExtractor={(item) => `AllProduct-${item.name}`}
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
