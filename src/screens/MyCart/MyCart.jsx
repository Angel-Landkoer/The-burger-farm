import { Dimensions, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [address, setAddress] = useState({
    dataDirection: "",
    city: "",
    district: "",
    route: "",
    additionalInformation: "",
  });

  const registed = useSelector((state) => state.auth.existemAccount);
  const userId = useSelector((state) => state.auth.userId);
  const allDataUser = useSelector((state) => state.auth.allDataUser);
  const shortTimeUserData = useSelector(
    (state) => state.auth.shortTimeUserData
  );
  const shortTimeAddressData = useSelector(
    (state) => state.auth.shortTimeAddressData
  );

  useEffect(() => {
    const existems = (data1, data2) => {
      if (data1 && data2) {
        return {
          name: data2.name,
          lastName: data2.lastName,
          phone: data2.phone,
          email: data1.email,
        };
      } else if (data2) {
        return data2;
      } else if (data1) {
        return data1;
      } else {
        return { name: "", lastName: "", phone: "", email: "" };
      }
    };

    const exitemsAddress = (data1, data2) => {
      if (data2) {
        return data2;
      } else if (data1) {
        return data1;
      } else {
        return {
          dataDirection: "",
          city: "",
          district: "",
          route: "",
          additionalInformation: "",
        };
      }
    };

    setUser(existems(allDataUser, shortTimeUserData));
    setAddress(exitemsAddress(allDataUser?.address, shortTimeAddressData));
  }, [shortTimeUserData, shortTimeAddressData]);

  const userCanAccess = () => {
    if (!registed)
      return navigation.navigate("DataDrawer", { screen: "LoginStack" });

    if (
      (!user.name && !user.lastName && !user.phone) ||
      (!address.city && !address.dataDirection && !address.district)
    )
      return navigation.navigate("DataDrawer");

    if (
      user.name &&
      user.lastName &&
      user.phone &&
      address.city &&
      address.dataDirection &&
      address.district
    )
      return navigation.navigate("OrderDrawer", {
        screen: "FinalizeOrderStack",
        params: {
          userId,
          user,
          addressData: {
            dataDirection: address.dataDirection,
            routeA: address.route,
            district: address.district,
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
