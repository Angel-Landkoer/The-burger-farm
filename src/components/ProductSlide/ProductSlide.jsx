import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DataCard } from "../DataCard/DataCard";
// import { Loading } from "../Loading/Loading";

export function ProductSlide({ type, data }) {
  return (
    <ScrollView>
      <View style={container}>
        <Text style={title}>{type}</Text>
        <FlatList
          data={data}
          renderItem={(item) => <DataCard data={item.item} />}
          keyExtractor={(item) => `Slide-${item.name}`}
          horizontal
        />
        <TouchableOpacity
          style={btn}
          onPress={() => console.warn("Redirecting")}
        >
          <Text style={btnTitle}>See complete list</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,

    borderColor: "black",
  },
  title: {
    marginBottom: 10,

    fontSize: 30,
    fontWeight: "700",
  },

  btn: {
    width: 200,
    padding: 3,
    marginTop: 15,
    borderWidth: 1,

    borderRadius: 20,
  },
  btnTitle: {
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
});

const { container, btn, btnTitle, title } = styles;
