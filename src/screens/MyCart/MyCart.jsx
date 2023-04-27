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

  const userData = allDataUser
    ? allDataUser
    : shortTimeUserData
    ? shortTimeUserData
    : { nombre: "", apellido: "", telefono: "" };

  const addressData = allDataUser?.address
    ? allDataUser.address
    : shortTimeAddressData
    ? shortTimeAddressData
    : { route: "", dataDirection: "", district: "" };

  const userCanAccess = () => {
    if (!registed)
      return navigation.navigate("DataDrawer", { screen: "LoginStack" });

    if (!userData.name && !userData.lastName && !userData.phone)
      return navigation.navigate("DataDrawer", {
        screen: "UpdateDataUserStack",
      });

    if (
      !addressData.city &&
      !addressData.dataDirection &&
      !addressData.district
    )
      return navigation.navigate("DataDrawer", {
        screen: "UpdateAddressStack",
      });

    if (
      userData.name &&
      userData.lastName &&
      userData.phone &&
      addressData.city &&
      addressData.dataDirection &&
      addressData.district
    )
      return navigation.navigate("OrderDrawer", {
        screen: "FinalizeOrderStack",
        params: {
          userData,
          addressData: {
            dataDirection: addressData.dataDirection,
            routeA: addressData.route,
            district: addressData.district,
          },
        },
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
