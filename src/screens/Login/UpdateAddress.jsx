import React from "react";
import { StyleSheet, View } from "react-native";
import { themes } from "../../styles/themes";
import { EditAddress } from "../../components/EditAddress/EditAddress";
import { CustomText } from "../../components/CustomText/CustomText";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function UpdateAddress({ navigation, route }) {
  const dataDefault = route.params.user;
  const userId = route.params.userId;

  const goToBack = () => navigation.goBack();

  return (
    <View style={[container, primaryBackground]}>
      <CustomText style={[title, primaryColor, textJustify]} fontF={"bold"}>
        It is important that you are precise and detailed when entering your
        address, this will ensure that your order can be delivered in the
        shortest possible time. Additionally, if you can confirm your address on
        our map, it will be easier to deliver it.
      </CustomText>
      <EditAddress
        userId={userId}
        goToBack={goToBack}
        dataDefault={dataDefault}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: heightPixel(480),
    paddingHorizontal: pixelSizeHorizontal(10),
  },
  title: { fontSize: fontPixel(10), paddingVertical: pixelSizeVertical(5) },
});

const { container, title } = styles;

const { primaryBackground, primaryColor, textJustify } = themes;
