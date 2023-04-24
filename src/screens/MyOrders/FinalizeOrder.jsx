import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { themes } from "../../styles/themes";
import { CustomText } from "../../components/CustomText/CustomText";
import { Modall } from "../../components/Modal/Modall";
import {
  createOrder,
  getOrder,
} from "../../store/globalData/actions/globalData.action";
import { deletedAllItemCart } from "../../store/cartSistem/actions/cartSistem.action";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function FinalizeOrder({ navigation, route }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchRedux = useDispatch();

  const dataUser = useSelector((state) => state.auth.allDataUser);

  const shortTimeUserData = useSelector(
    (state) => state.auth.shortTimeUserData
  );

  const shortTimeAddressData = useSelector(
    (state) => state.auth.shortTimeAddressData
  );

  const userId = useSelector((state) => state.auth.userId);
  const productsCart = useSelector((state) => state.cart.cartItems);
  const totalProducts = useSelector((state) => state.cart.total);
  const orderId = useSelector((state) => state.data.orderId);
  const largeTimeUserData = dataUser || shortTimeUserData;
  const largeTimeAddressData = dataUser.address || shortTimeAddressData;
  const dataPayment = ["Money", "Card"];

  const math = totalProducts / 1000;

  const dataReducer = () => {
    const delivery = [2000, 3000, 4000, 5000, 6000].map((item) => item / 1000);
    delivery[Math.floor(Math.random() * (1 - 5) + 5)];

    dispatch({ type: "@TOGGLE_MODAL_CONFIRM" });
    dispatch({
      type: "@DATA_NAME",
      payload: `${largeTimeUserData.name} ${largeTimeUserData.lastName}`,
    });
    dispatch({ type: "@DATA_PHONE", payload: `${largeTimeUserData.phone}` });
    dispatch({
      type: "@DATA_ADDRESS",
      payload: `${largeTimeAddressData.route} ${largeTimeAddressData.dataDirection} ${largeTimeAddressData.district}`,
    });

    dispatch({ type: "@DATA_PRODUCTS", payload: productsCart });
    dispatch({
      type: "@DATA_TOTAL",
      payload: `${math + delivery[Math.floor(Math.random() * (1 - 5) + 5)]}K`,
    });
  };

  const handleSendFinalizeInfo = () => {
    const data = {
      name: state.dataName,
      phone: state.dataPhone,
      address: state.dataAddress,
      total: state.dataTotal,
      payment: state.dataPayment,
      additionalInfo: state.dataAdditionalInfo,
      products: state.dataProducts,
    };
    dispatchRedux(createOrder(userId, data));
    dispatch({ type: "@TOGGLE_MODAL_CONFIRM" });

    dispatch({ type: "@TOGGLE_MODAL_RESPONSE" });
  };

  const handleSendResponse = () => {
    dispatch({ type: "@TOGGLE_MODAL_RESPONSE" });
    dispatchRedux(getOrder(userId));
    dispatchRedux(deletedAllItemCart());
    navigation.navigate("MyOrderStack");
  };

  const modalBtnConfirm = [
    {
      textBtn: "CANCEL",
      actionState: () => dispatch({ type: "@TOGGLE_MODAL_CONFIRM" }),
    },
    {
      textBtn: "OK",
      actionState: handleSendFinalizeInfo,
    },
  ];

  const modalBtnResponse = [
    {
      textBtn: "OK",
      actionState: handleSendResponse,
    },
  ];

  return (
    <ScrollView>
      <View style={[container, primaryBackground]}>
        <View style={[contentTitle]}>
          <CustomText style={[titles, primaryColor]} fontF={"bold"}>
            PERSONAL DATA
          </CustomText>
          <View style={[subContainer]}>
            <CustomText style={[subTitle, secondaryColor]} fontF={"bold"}>
              Name:
            </CustomText>
            <CustomText style={[styleText]} fontF={"semiBold"}>
              {`${largeTimeUserData.name} ${largeTimeUserData.lastName}`}
            </CustomText>
          </View>
          <View style={[subContainer]}>
            <CustomText style={[subTitle, secondaryColor]} fontF={"bold"}>
              Phone:
            </CustomText>
            <CustomText style={[styleText]} fontF={"semiBold"}>
              {`${largeTimeUserData.phone}`}
            </CustomText>
          </View>

          <View style={[subContainer]}>
            <CustomText style={[subTitle, secondaryColor]} fontF={"bold"}>
              Address:
            </CustomText>
            <View
              style={[
                {
                  width: "100%",
                  borderWidth: 2,
                  paddingHorizontal: pixelSizeHorizontal(3),
                },
                primaryBorderColor,
              ]}
            >
              <CustomText style={[styleText]} fontF={"semiBold"}>
                {`${largeTimeAddressData.route} ${largeTimeAddressData.dataDirection} ${largeTimeAddressData.district}`}
              </CustomText>
            </View>
          </View>
        </View>

        <Modall
          btns={modalBtnConfirm}
          state={state.toggleModalConfirm}
          title={`Name: ${largeTimeUserData.name} ${largeTimeUserData.lastName} Phone: ${largeTimeUserData.phone} Address: ${largeTimeAddressData.route} ${largeTimeAddressData.dataDirection} ${largeTimeAddressData.district} Total: ${math}K + Delivery Payment: ${state.dataPayment}`}
        />

        <Modall
          btns={modalBtnResponse}
          state={state.toggleModalResponse}
          title={`Thank you for choosing us!
            Your order has been placed.
            The burger farm informs you that by using this code you will be able to track your order.
            Your order code is: ${orderId ? orderId : "Loading..."} `}
        />

        <View style={[contentTitle]}>
          <CustomText style={[titles, primaryColor]} fontF={"bold"}>
            PAYMENT INFORMATION
          </CustomText>
          <View style={[subContainer]}>
            <CustomText style={[subTitle, secondaryColor]} fontF={"bold"}>
              TOTAL:
            </CustomText>
            <CustomText style={[styleText]} fontF={"semiBold"}>
              {`${math}K + Delivery`}
            </CustomText>
          </View>
          <View style={[subContainer]}>
            <CustomText style={[subTitle, secondaryColor]} fontF={"bold"}>
              Pay:
            </CustomText>
            <SelectDropdown
              buttonStyle={selectDropdowns}
              buttonTextStyle={selectDropdownText}
              data={dataPayment}
              onSelect={(selectedItem, index) =>
                dispatch({ type: "@DATA_PAYMENT", payload: selectedItem })
              }
              buttonTextAfterSelection={(selectedItem, index) => (
                <CustomText
                  key={`Dropdown-${index}`}
                  style={[primaryColor]}
                  fontF={"semiBold"}
                >
                  {selectedItem}
                </CustomText>
              )}
              rowTextForSelection={(item, index) => (
                <CustomText
                  key={`rowTextFor-${index}`}
                  style={[primaryColor]}
                  fontF={"semiBold"}
                >
                  {item}
                </CustomText>
              )}
            />
          </View>

          <View style={[subContainer]}>
            <CustomText style={[subTitle, secondaryColor]} fontF={"bold"}>
              ADDITIONAL:
            </CustomText>
            <TextInput
              style={[styleText, styleInput]}
              autoCapitalize="none"
              inputMode="text"
              keyboardType="default"
              placeholder="Enter additional information that you consider important in your order"
              multiline
              numberOfLines={3}
              onChangeText={(e) =>
                dispatch({ type: "@DATA_ADDITIONAL", payload: e })
              }
            />
          </View>
        </View>
        <TouchableOpacity
          style={[secondaryBackground, btn]}
          onPress={dataReducer}
        >
          <MaterialIcons
            name="attach-money"
            size={36}
            color={senaryColor.color}
          />
          <CustomText style={[textBtn, , senaryColor]} fontF={"bold"}>
            Finalize Order
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const initialState = {
  dataName: "",
  dataPhone: "",
  dataAddress: "",
  dataTotal: 0,
  dataPayment: "",
  dataProducts: false,
  dataAdditionalInfo: "",
  toggleModalConfirm: false,
  toggleModalResponse: false,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type == "@DATA_NAME") return { ...state, dataName: payload };
  if (type == "@DATA_PHONE") return { ...state, dataPhone: payload };
  if (type == "@DATA_ADDRESS") return { ...state, dataAddress: payload };
  if (type == "@DATA_TOTAL") return { ...state, dataTotal: payload };
  if (type == "@DATA_PAYMENT") return { ...state, dataPayment: payload };
  if (type == "@DATA_ADDITIONAL")
    return { ...state, dataAdditionalInfo: payload };
  if (type == "@DATA_PRODUCTS") return { ...state, dataProducts: payload };
  if (type == "@TOGGLE_MODAL_CONFIRM")
    return { ...state, toggleModalConfirm: !state.toggleModalConfirm };
  if (type == "@TOGGLE_MODAL_RESPONSE")
    return { ...state, toggleModalResponse: !state.toggleModalResponse };

  return state;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",

    paddingHorizontal: pixelSizeHorizontal(15),
    paddingVertical: pixelSizeVertical(5),
    marginTop: 13,
    width: "100%",
  },
  contentTitle: {
    marginTop: 10,
    paddingVertical: pixelSizeVertical(3),
  },
  titles: {
    fontSize: fontPixel(20),
  },
  subContainer: {
    marginVertical: pixelSizeVertical(5),
    paddingVertical: pixelSizeVertical(5),
    paddingHorizontal: pixelSizeHorizontal(3),
  },
  subTitle: {
    fontSize: fontPixel(15),
  },
  styleText: {
    fontSize: fontPixel(12),
  },
  selectDropdowns: {
    alignItems: "flex-start",
    justifyContent: "center",

    minWidth: widthPixel(100),
    width: widthPixel(140),
    minHeight: heightPixel(15),
    height: heightPixel(20),
    borderWidth: 2,

    borderColor: "#CD973D",
    borderRadius: "50%",
  },
  selectDropdownText: {
    fontSize: fontPixel(13),
    fontWeight: "700",

    color: "#54423A",
  },
  styleInput: {
    minHeight: heightPixel(80),
    height: heightPixel(100),
    minWidth: widthPixel(150),
    width: widthPixel(180),
    borderWidth: 1,
    paddingHorizontal: pixelSizeHorizontal(2),
    paddingVertical: pixelSizeVertical(2),
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: widthPixel(150),
    width: widthPixel(280),
    minHeight: heightPixel(25),
    height: heightPixel(30),
    marginVertial: pixelSizeVertical(20),
    paddingVertical: pixelSizeVertical(2),

    borderRadius: "50%",
  },
  textBtn: {
    fontSize: fontPixel(18),
  },
});

const {
  btn,
  textBtn,
  subTitle,
  container,
  styleText,
  styleInput,
  titles,
  contentTitle,
  subContainer,
  selectDropdowns,
  selectDropdownText,
} = styles;

const {
  primaryBackground,
  secondaryBackground,
  primaryBorderColor,
  secondaryColor,
  primaryColor,
  senaryColor,
} = themes;
