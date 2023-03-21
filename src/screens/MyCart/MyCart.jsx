import {
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { datas } from "../../utils/data";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import { RenderList } from "../../components/RenderList/RenderList";
import { CustomText } from "../../components/CustomText/CustomText";

export function MyCart({ navigation }) {
  // datos filtrado de selecction -- falta hacer en el estado global
  const { burgers } = datas;

  const lessData = burgers.data.splice(0, 5)

  return (
    <ScrollView>
      <View style={[containerFontBox, primaryBackground]}>
        <RenderList
          data={lessData}
          component={({item}) => <CartProduct data={item} />}
          stringKey={(item) => `CartItem-${item.name}`}
          horizontal={false}
        />
        <View style={[resultData]}>

          {/* Traer el calculo total del los productos, function */}
          <CustomText
            style={[text2Xl, textCenter, secondaryColor]}
            fontF={"bold"}
          >
            Order Total: {"PriceTotal"}
          </CustomText>
          <CustomText
            style={[textXl, textCenter, secondaryColor]}
            fontF={"bold"}
          >
            Address: Between {"2K"} and {"6K"}
          </CustomText>

          <TouchableOpacity
            style={[btnData, secondaryBackground]}
            onPress={() => console.warn("Send Info")}
          >
            <CustomText
              style={[text2Xl, textCenter, senaryColor]}
              fontF={"bold"}
            >
              $ Make the Purchase
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
  containerFontBox,
  primaryBackground,
  text2Xl,
  textXl,
  textCenter,
  secondaryColor,
  senaryColor,
  secondaryBackground,
} = themes;
