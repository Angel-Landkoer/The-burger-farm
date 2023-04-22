import React from "react";
import { StyleSheet, View } from "react-native";
import { themes } from "../../styles/themes";
import { EditAddress } from "../../components/EditAddress/EditAddress";
import { CustomText } from "../../components/CustomText/CustomText";

export function UpdateAddress({ navigation, route }) {
  const { user, userId } = route.params;

  const dataDefault = user;

  const goToBack = () => navigation.goBack();

  return (
    <View style={[containerFontBox, primaryBackground]}>
      <CustomText style={[primaryColor, textLg, textJustify]} fontF={"bold"}>
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

const styles = StyleSheet.create({});

const {} = styles;

const {
  containerFontBox,
  primaryBackground,
  textLg,
  primaryColor,
  textJustify,
} = themes;
