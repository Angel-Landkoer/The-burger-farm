import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { DataCard } from "../../components/DataCard/DataCard";
import { data } from "../../utils/data";

export function AllProductSection() {
  const { type } = data;
  const { burgers } = type;

  return (
    <ScrollView>
      <View style={container}>
        <FlatList
          style={flat}
          data={burgers}
          renderItem={(item) => <DataCard data={item.item} />}
          keyExtractor={(item) => `AllProduct-${item.name}`}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",

    width: "100%",
    padding: 20,
  },
  flat: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
});

const { container, flat } = styles;
