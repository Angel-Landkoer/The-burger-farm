import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { themes } from "../../styles/themes";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import { RenderList } from "../../components/RenderList/RenderList";
import { CustomText } from "../../components/CustomText/CustomText";
import { deletedItemCart } from "../../store/cartSistem/actions/cartSistem.action";

export function MyCart({ navigation }) {
  // datos filtrado de selecction -- falta hacer en el estado global

  const cartItems = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  const onDeletedItem = (deleted) => dispatch(deletedItemCart(deleted));

  return (
    <View style={[container, containerFontBox, primaryBackground]}>
      <RenderList
        data={cartItems}
        component={({ item }) => (
          <CartProduct onDeletedItem={onDeletedItem} data={item} />
        )}
        stringKey={(item) => `CartItem-${item.name}`}
        horizontal={false}
      />
      <View style={[resultData]}>
        {/* Traer el calculo total del los productos, function */}
        <CustomText
          style={[text2Xl, textCenter, secondaryColor]}
          fontF={"bold"}
        >
          Order Total: {0}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height / 1.12,
  },

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
const { resultData, btnData, container } = styles;

const {
  containerFontBox,
  primaryBackground,
  text2Xl,
  textXl,
  textCenter,
  secondaryColor,
  senaryColor,
  secondaryBackground,
} = themes;
