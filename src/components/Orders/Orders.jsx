import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { CustomText } from "../CustomText/CustomText";
import { themes } from "../../styles/themes";

// recibe los el dato de firebase de la orden
export function Orders({ data }) {
  return (
    <View style={container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomText style={[textLg]} fontF={"bold"}>
          COde
        </CustomText>
        <CustomText style={[textLg]} fontF={"bold"}>
          State
        </CustomText>
        <CustomText style={[textLg]} fontF={"bold"}>
          Date
        </CustomText>
        <CustomText style={[textLg]} fontF={"bold"}>
          See
        </CustomText>
      </View>
      <View style={[tableContent, primaryBorderColor]}>
        <View style={[codeStyle]}>
          <CustomText style={[textSm]} fontF={"bold"}>
            {"fja;ljf;ki43"}
          </CustomText>
        </View>
        <View style={[stateStyle]}>
          <CustomText style={[textSm]} fontF={"bold"}>
            {"sumbmitted"}
          </CustomText>
        </View>
        <View style={[dateStyle]}>
          <CustomText style={[textSm]} fontF={"bold"}>
            {"28/11/1999"}
          </CustomText>
        </View>
        <View style={[seeStyle]}>
          <FontAwesome5 name="eye" size={60} color={secondaryColor.color} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
  },
  tableContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flexWrap: "wrap",

    width: "100%",
    borderWidth: 1,
  },
  codeStyle: {
    alignContent:"center",
    justifyContent: "center",

    borderEndWidth: 1,
    borderStartWidth: 1,
    paddingHorizontal: 5
  },
  stateStyle: {
    alignContent:"center",
    justifyContent: "center",

    borderEndWidth: 1,
    borderStartWidth: 1,
    paddingHorizontal: 5
  },
  dateStyle: {
    alignContent:"center",
    justifyContent: "center",

    borderEndWidth: 1,
    borderStartWidth: 1,
    paddingHorizontal: 5
  },
  seeStyle: {
    alignContent:"center",
    justifyContent: "center",

    borderEndWidth: 1,
    borderStartWidth: 1,
    paddingHorizontal: 5
  },
});

const { container, codeStyle, dateStyle, stateStyle, seeStyle, tableContent } =
  styles;

const { secondaryColor, textLg, textXl, primaryBorderColor, textSm } = themes;
