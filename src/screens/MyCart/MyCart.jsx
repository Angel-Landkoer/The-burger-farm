import { Dimensions, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cart } from "../../components/Cart/Cart";
import { themes } from "../../styles/themes";
import { pixelSizeHorizontal } from "../../styles/normalize";
import { getData } from "../../store/authUser/actions/authUser.action";
import { getOrder } from "../../store/globalData/actions/globalData.action";

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

  const dispatch = useDispatch();

  const registed = useSelector((state) => state.auth.existemAccount);
  const userId = useSelector((state) => state.auth.userId);
  const allDataUser = useSelector((state) => state.auth.allDataUser);

  useEffect(() => {
    if (userId) {
      (() => {
        dispatch(getOrder(userId));
        dispatch(getData(userId));
      })();
    }

    setUser(allDataUser);
    setAddress(allDataUser?.address);
  }, [userId]);

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
