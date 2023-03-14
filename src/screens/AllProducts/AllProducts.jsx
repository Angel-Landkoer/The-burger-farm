import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { CustomText } from "../../components/CustomText/CustomText";
import { datas } from "../../utils/data";
import { themes } from "../../styles/themes";
import { RenderList } from "../../components/RenderList/RenderList";
import { DataCard } from "../../components/DataCard/DataCard";

export function AllProducts() {
  const { burgers } = datas;

  return (
    <ScrollView>
      <View style={[container, primaryBackground]}>
        <CustomText
          style={[text, primaryColor, text2Xl, textCenter]}
          fontF={"semiBold"}
        >{`Name Section`}</CustomText>

        <RenderList
          data={burgers.data}
          component={(item) => <DataCard data={item.item} />}
          stringKey={(item) => `AllProduct-${item.name}`}
          numColumns={3}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
  },

  text: {
    padding: 10,
    marginBottom: 10,
  },
});

const { container, text } = styles;

const {
  containerFontBox,
  primaryBackground,
  primaryColor,
  text2Xl,
  textCenter,
} = themes;

/*

  return (
    <ScrollView>
      <View style={[container, primaryBackground]}>
        <CustomText
          style={[text, primaryColor, text2Xl, textCenter]}
          fontF={"semiBold"}
        >{`Name Section`}</CustomText>
        <RenderList
          data={burgers.data}
          component={(item) => <DataCard data={item.item} />}
          stringKey={(item) => `AllProduct-${item.name}`}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
 */
