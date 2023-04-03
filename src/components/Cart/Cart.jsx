import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { themes } from "../../styles/themes";
import { CartProduct } from "../CartProduct/CartProduct";
import { RenderList } from "../RenderList/RenderList";
import { CustomText } from "../CustomText/CustomText";
import { deletedItemCart } from "../../store/cartSistem/actions/cartSistem.action";

export function Cart() {
  // datos filtrado de selecction -- falta hacer en el estado global

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = useSelector((state) => state.cart.total);

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
          style={[text2Xl, textCenter, secondaryColor]}
          fontF={"bold"}
        >
          Order Total: {`${math}K`}
        </CustomText>
        <CustomText style={[textXl, textCenter, secondaryColor]} fontF={"bold"}>
          Address: Between {"2K"} and {"6K"}
        </CustomText>

        <TouchableOpacity
          style={[btnData, secondaryBackground]}
          onPress={() => console.warn("Send Info")}
        >
          <CustomText style={[text2Xl, textCenter, senaryColor]} fontF={"bold"}>
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

    minWidth: "70%",
    width: 300,
    maxWidth: "90%",
    marginVertical: 10,
    paddingVertical: 10,
  },
  btnData: {
    minWidth: 250,
    width: 300,
    maxWidth: "90%",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10,

    borderRadius: 30,
  },
});
const { resultData, btnData } = styles;

const {
  text2Xl,
  textXl,
  textCenter,
  secondaryColor,
  senaryColor,
  secondaryBackground,
} = themes;
