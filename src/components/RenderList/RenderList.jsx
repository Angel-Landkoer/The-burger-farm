import { View, Text, FlatList } from "react-native";
import React from "react";
import { Loading } from "../Loading/Loading";

export function RenderList({
  data,
  component,
  horizontal,
  stringKey,
  loading,
  styles,
}) {
  console.log("Component: ", component);

  return (
    <>
      <FlatList
        style={styles}
        data={data}
        renderItem={component}
        keyExtractor={stringKey}
        horizontal={horizontal}
      />
    </>
  );
}
