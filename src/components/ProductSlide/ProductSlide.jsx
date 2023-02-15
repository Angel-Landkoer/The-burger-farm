import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function ProductSlide() {
  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <FlatList data={null} renderItem={null} keyExtractor={null} />
        <TouchableOpacity onPress={() => null}>
          <Text>See complete list</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

const {} = styles;
