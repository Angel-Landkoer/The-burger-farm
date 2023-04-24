import { Dimensions, StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Cart } from "../../components/Cart/Cart";
import { themes } from "../../styles/themes";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize";

export function MyCart({ navigation }) {
  const registed = useSelector((state) => state.auth.existemAccount);
  const allDataUser = useSelector((state) => state.auth.allDataUser);
  const shortTimeUserData = useSelector(
    (state) => state.auth.shortTimeUserData
  );
  const shortTimeAddressData = useSelector(
    (state) => state.auth.shortTimeAddressData
  );

  const allDataUserExistem = allDataUser && allDataUser;
  const userData = allDataUser || shortTimeUserData;
  const addressData = allDataUser.address || shortTimeAddressData;

  const userCanAccess = () => {
    if (!registed) return navigation.navigate("DataDrawer");
    if (
      !allDataUserExistem.name &&
      !allDataUserExistem.lastName &&
      !allDataUserExistem.email &&
      !allDataUserExistem.phone
    )
      return navigation.navigate("UpdateDataUserStack");
    if (
      !allDataUserExistem.address.city &&
      !allDataUserExistem.address.district &&
      !allDataUserExistem.address.route &&
      !allDataUserExistem.address.dataDirection &&
      !allDataUserExistem.address.additionalInformation
    )
      return navigation.navigate("UpdateAddressStack");
    if (registed)
      return navigation.navigate("FinalizeOrderStack", {
        userData,
        addressData,
      });
  };

  return (
    <View style={[primaryBackground, container]}>
      <Cart userCanAccess={userCanAccess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",
    paddingHorizontal: pixelSizeHorizontal(10),
  },
});

const { container } = styles;

const { primaryBackground } = themes;
