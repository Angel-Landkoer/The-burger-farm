import { FlatList } from "react-native";
import React from "react";

export function RenderList({
  data,
  component,
  horizontal,
  stringKey,
  styles,
  numColumns = 1,
  contentContainerStyle,
}) {
  return (
    <>
      <FlatList
        style={styles}
        data={data}
        renderItem={component}
        keyExtractor={stringKey}
        horizontal={horizontal}
        numColumns={numColumns}
        contentContainerStyle={contentContainerStyle}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}
