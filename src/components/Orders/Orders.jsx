import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { CustomText } from "../CustomText/CustomText";
import { themes } from "../../styles/themes";
import { RenderList } from "../RenderList/RenderList";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function Orders({ orders }) {
  return (
    <View style={container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CustomText style={[title]} fontF={"bold"}>
          Code
        </CustomText>
        <CustomText style={[title]} fontF={"bold"}>
          State
        </CustomText>
        <CustomText style={[title]} fontF={"bold"}>
          Date
        </CustomText>
        <CustomText style={[title]} fontF={"bold"}>
          See
        </CustomText>
      </View>

      <RenderList
        styles={styleRenderList}
        data={orders || []}
        component={({ item }) => (
          <View style={[tableContent, primaryBorderColor]}>
            <View style={[codeStyle]}>
              <CustomText style={[text]} fontF={"bold"}>
                {item.id}
              </CustomText>
            </View>
            <View style={[stateStyle]}>
              <CustomText style={[text]} fontF={"bold"}>
                {item.id ? "En camino" : "No camina"}
              </CustomText>
            </View>
            <View style={[dateStyle]}>
              <CustomText style={[text]} fontF={"bold"}>
                {item.date}
              </CustomText>
            </View>
            <View style={[seeStyle]}>
              <FontAwesome5 name="eye" size={45} color={secondaryColor.color} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    marginTop: 10,
    paddingTop: 5,
  },
  styleRenderList: {
    paddingHorizontal: pixelSizeHorizontal(5),
  },
  tableContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    width: "100%",
    minHeight: heightPixel(25),
    height: heightPixel(40),

    borderWidth: 1,
  },
  codeStyle: {
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: pixelSizeHorizontal(3),
  },
  stateStyle: {
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  dateStyle: {
    alignContent: "center",
    justifyContent: "center",
    paddingHorizontal: pixelSizeHorizontal(3),
  },
  seeStyle: {
    alignContent: "center",
    justifyContent: "center",

    paddingHorizontal: pixelSizeHorizontal(3),
  },
  title: {
    fontSize: fontPixel(10),
  },
  text: {
    fontSize: fontPixel(7),
  },
});

const {
  container,
  codeStyle,
  dateStyle,
  stateStyle,
  seeStyle,
  tableContent,
  styleRenderList,
  title,
  text,
} = styles;

const { secondaryColor, primaryBorderColor } = themes;
