import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RESET_ACCOUNT } from "../../store/authUser/actions/authUser.action";
import { FontAwesome5 } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";
import { Modall } from "../../components/Modal/Modall";

export function LoginCompleted({ navigation }) {
  const [toggleModal, setToggleModal] = useState(false);

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.allDataUser);
  const { name, phone, email } = userData;
  const { route, dataDirection, district } = userData.address;

  const routeUserData = () =>
    navigation.navigate("UpdateDataUserStack", { user: userData });

  const routeAddressData = () =>
    navigation.navigate("UpdateAddressStack", { user: userData });

  const handleConfirmDeleteAccount = () => {
    setToggleModal(!toggleModal);
    dispatch({ type: RESET_ACCOUNT });
  };

  return (
    <View style={[containerFontBox, container, primaryBackground]}>
      <CustomText style={[title, text4Xl, primaryColor]} fontF={"bold"}>
        Information Genaral
      </CustomText>

      <View style={infoUser}>
        <TouchableOpacity style={btnEditUser} onPress={routeUserData}>
          <FontAwesome5 name="edit" size={32} color={secondaryColor.color} />
        </TouchableOpacity>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"bold"}>Name:</CustomText>
          <CustomText fontF={"bold"}>{name ? name : "null"}</CustomText>
        </View>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"bold"}>Phone:</CustomText>
          <CustomText fontF={"bold"}>{phone ? phone : "null"}</CustomText>
        </View>
        <View style={[subCotainerInfoUser, primaryBorderColor]}>
          <CustomText fontF={"bold"}>Email:</CustomText>
          <CustomText fontF={"bold"}>{email ? email : "null"}</CustomText>
        </View>
      </View>

      <Modall
        state={toggleModal}
        changeState={setToggleModal}
        text={"Do you really want to delete your account?"}
      >
        <Pressable
          style={[modalBtn, septenaryBackground]}
          onPress={handleConfirmDeleteAccount}
        >
          <CustomText
            fontF={"semiBold"}
            style={[textModalBtn, senaryColor, textLg]}
          >
            Yes
          </CustomText>
        </Pressable>
        <Pressable
          style={[modalBtn, septenaryBackground]}
          onPress={() => setToggleModal(!toggleModal)}
        >
          <CustomText
            fontF={"semiBold"}
            style={[textModalBtn, senaryColor, textLg]}
          >
            No
          </CustomText>
        </Pressable>
      </Modall>

      <TouchableOpacity
        style={btnCloseLogin}
        onPress={() => setToggleModal(!toggleModal)}
      >
        <FontAwesome5
          name="window-close"
          size={45}
          color={quinaryColor.color}
        />
        <CustomText style={[text2Xl, quinaryColor]} fontF={"semiBold"}>
          Deleted Account
        </CustomText>
      </TouchableOpacity>

      <View style={infoAddress}>
        <CustomText
          style={[addressTitle, text4Xl, primaryColor]}
          fontF={"bold"}
        >
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
            {dataDirection
              ? `${route}-${dataDirection} ${district}`
              : "AddressText"}
          </CustomText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "80%",
  },
  title: {
    alignSelf: "flex-start",

    width: "70%",
  },
  infoUser: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",

    width: "100%",
    padding: 10,
    marginVertical: 40,

    borderColor: "black",
  },
  infoAddress: {
    width: "100%",
    padding: 10,
    marginVertical: 40,
  },
  addressTitle: {
    alignSelf: "flex-start",
  },
  btnEditUser: {
    position: "absolute",
    left: "95%",
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

    padding: 10,
    width: "100%",
    borderWidth: 1,
  },
  subCotainerInfoAddress: {
    alignItems: "flex-start",
    justifyContent: "center",

    width: "100%",
    padding: 10,
    marginVertical: 15,
    borderBottomWidth: 1,
  },
  addressText: {
    paddingHorizontal: 3,
  },
  btnCloseLogin: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  modalBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,

    borderRadius: 20,
  },
  textModalBtn: {},
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
  btnCloseLogin,
  modalBtn,
  textModalBtn,
} = styles;

const {
  containerFontBox,
  primaryBackground,
  text4Xl,
  textLg,
  text2Xl,
  secondaryColor,
  primaryBorderColor,
  quinaryColor,
  primaryColor,
  senaryColor,
  septenaryBackground,
} = themes;
