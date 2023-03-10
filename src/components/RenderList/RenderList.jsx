import { FlatList } from "react-native";
import React from "react";

export function RenderList({
  data,
  component,
  horizontal,
  stringKey,
  loading,
  styles,
}) {
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
