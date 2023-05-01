import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET_ACCOUNT,
  getData,
} from "../../store/authUser/actions/authUser.action";
import { getOrder } from "../../store/globalData/actions/globalData.action";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";
import { Modall } from "../../components/Modal/Modall";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function LoginCompleted({ navigation }) {
  const [toggleModal, setToggleModal] = useState(false);
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

  const routeUserData = () =>
    navigation.navigate("UpdateDataUserStack", {
      user,
      userId,
    });

  const routeAddressData = () =>
    navigation.navigate("UpdateAddressStack", {
      user: address,
      userId,
    });

  const handleConfirmDeleteAccount = () => {
    setToggleModal(!toggleModal);
    dispatch({ type: RESET_ACCOUNT });
  };

  const modalBtns = [
    {
      textBtn: "Yes",
      actionState: handleConfirmDeleteAccount,
    },
    {
      textBtn: "No",
      actionState: () => setToggleModal(!toggleModal),
    },
  ];

  return (
    <View style={[container, primaryBackground]}>
      <CustomText style={[title, primaryColor]} fontF={"bold"}>
        Information Genaral
      </CustomText>

      <View style={infoUser}>
        <TouchableOpacity style={btnEditUser} onPress={routeUserData}>
          <FontAwesome5 name="edit" size={32} color={secondaryColor.color} />
        </TouchableOpacity>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"bold"}>Name:</CustomText>
          <CustomText fontF={"bold"}>{user.name || "null"}</CustomText>
        </View>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"bold"}>Phone:</CustomText>
          <CustomText fontF={"bold"}>{user.phone || "null"}</CustomText>
        </View>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"bold"}>Email:</CustomText>
          <CustomText fontF={"bold"}>{user.email || "null"}</CustomText>
        </View>
      </View>

      <Modall
        btns={modalBtns}
        state={toggleModal}
        title={"Do you really want to delete your account?"}
      />

      <TouchableOpacity
        style={btnCloseLogin}
        onPress={() => setToggleModal(!toggleModal)}
      >
        <FontAwesome5
          name="window-close"
          size={50}
          color={quinaryColor.color}
        />
        <CustomText
          style={[textBtnCloseLogin, quinaryColor]}
          fontF={"semiBold"}
        >
          Deleted Account
        </CustomText>
      </TouchableOpacity>

      <View style={infoAddress}>
        <CustomText style={[addressTitle, primaryColor]} fontF={"bold"}>
          Address
        </CustomText>
        <TouchableOpacity style={btnEditAddress} onPress={routeAddressData}>
          <FontAwesome5
            name="plus-square"
            size={32}
            color={secondaryColor.color}
          />
        </TouchableOpacity>
        <View style={[subCotainerInfoAddress, primaryBorderColor]}>
          <CustomText style={[addressText]} fontF={"bold"}>
            {(address.dataDirection &&
              `${address.route} ${address.dataDirection} ${address.district}`) ||
              "AddressText"}
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "100%",
    height: heightPixel(480),
    paddingHorizontal: pixelSizeHorizontal(15),
  },
  title: {
    alignSelf: "flex-start",

    minWidth: "70%",
    width: widthPixel(200),
    paddingTop: 15,
    paddingLeft: 20,

    fontSize: fontPixel(20),
  },
  infoUser: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",

    width: "100%",
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),
    marginVertical: pixelSizeVertical(25),

    borderColor: "black",
  },
  infoAddress: {
    width: "100%",
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),
    marginVertical: pixelSizeVertical(25),
  },
  addressTitle: {
    alignSelf: "flex-start",
  },
  btnEditUser: {
    position: "absolute",
    left: "92%",
    top: -30,
  },
  btnEditAddress: {
    position: "absolute",
    left: "90%",
    top: "30%",
  },
  subCotainerInfoUser: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),
    width: "100%",
    borderWidth: 1,
  },
  subCotainerInfoAddress: {
    alignItems: "flex-start",
    justifyContent: "center",

    width: "100%",
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),
    marginVertical: pixelSizeVertical(10),
    borderBottomWidth: 1,
  },
  addressText: {
    paddingHorizontal: pixelSizeHorizontal(3),
  },
  btnCloseLogin: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    minWidth: 200,
    width: widthPixel(250),
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),
  },
  textBtnCloseLogin: {
    fontSize: fontPixel(13),
  },
});

const {
  container,
  title,
  infoUser,
  infoAddress,
  addressTitle,
  btnEditUser,
  btnEditAddress,
  subCotainerInfoUser,
  subCotainerInfoAddress,
  addressText,
  textBtnCloseLogin,
  btnCloseLogin,
} = styles;

const {
  primaryBackground,
  secondaryColor,
  primaryBorderColor,
  quinaryColor,
  primaryColor,
} = themes;
