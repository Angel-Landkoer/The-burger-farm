import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { themes } from "../../styles/themes";
import { CartProduct } from "../CartProduct/CartProduct";
import { RenderList } from "../RenderList/RenderList";
import { CustomText } from "../CustomText/CustomText";
import { deletedItemCart } from "../../store/cartSistem/actions/cartSistem.action";
import {
  widthPixel,
  fontPixel,
  pixelSizeVertical,
} from "../../styles/normalize.js";

export function Cart({ userCanAccess }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = useSelector((state) => state.cart.total);

  const cartItemsLength = cartItems.length > 0;

  const dispatch = useDispatch();

  const onDeletedItem = (deleted) => dispatch(deletedItemCart(deleted));

  const math = totalItems / 1000;

  return (
    <>
      <RenderList
        data={cartItems}
        component={({ item }) => (
          <CartProduct onDeletedItem={onDeletedItem} data={item} />
        )}
        stringKey={(item) => `CartItem-${item.name}`}
        horizontal={false}
      />
      <View style={[resultData]}>
        <CustomText
          style={[textTotal, textCenter, secondaryColor]}
          fontF={"bold"}
        >
          Order Total: {`${math}K`}
        </CustomText>
        <CustomText
          style={[textDelivery, textCenter, secondaryColor]}
          fontF={"bold"}
        >
          Address: Between {"2K"} and {"6K"}
        </CustomText>

        <TouchableOpacity
          style={
            cartItemsLength
              ? [btnData, secondaryBackground]
              : [btnData, { backgroundColor: "#aaa" }]
          }
          onPress={userCanAccess}
          disabled={!cartItemsLength}
        >
          <CustomText style={[textBtn, textCenter, senaryColor]} fontF={"bold"}>
            $ Make the Purchase
          </CustomText>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  resultData: {
    justifyContent: "center",
    alignItems: "center",

    minWidth: 250,
    width: widthPixel(250),
    maxWidth: "90%",
    marginVertical: pixelSizeVertical(5),
    paddingVertical: pixelSizeVertical(10),
  },
  btnData: {
    minWidth: 200,
    width: widthPixel(200),
    maxWidth: "90%",
    paddingVertical: pixelSizeVertical(5),
    paddingHorizontal: pixelSizeVertical(15),
    marginTop: 10,

    borderRadius: 30,
  },
  textBtn: {
    fontSize: fontPixel(12),
  },
  textTotal: {
    fontSize: fontPixel(12),
  },
  textDelivery: {
    fontSize: fontPixel(12),
  },
});
const { textBtn, resultData, btnData, textDelivery, textTotal } = styles;

const { textCenter, secondaryColor, senaryColor, secondaryBackground } = themes;
