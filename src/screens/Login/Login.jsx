import { StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { FormDataLogin } from "../../components/FormDataLogin/FormDataLogin";
import { CustomText } from "../../components/CustomText/CustomText";

export function Login({ screens, setScreens }) {
  return (
    <View style={[containerFontBox, primaryBackground]}>
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "80%",
          top: 50
        }}
      >
        <Pressable
          onPress={() =>
            setScreens({
              ...screens,
              home: true,
              cart: false,

            })
          }
        >
          <CustomText fontF={"medium"}>Home</CustomText>
        </Pressable>
        <Pressable
          onPress={() =>
            setScreens({
              ...screens,
              home: false,
              cart: true,
              data: false,
              orders: false,
              findUs: false,
            })
          }
        >
          <CustomText fontF={"medium"}>Cart</CustomText>
        </Pressable>
        <Pressable
          onPress={() =>
            setScreens({
              ...screens,
              home: false,
              cart: false,
              data: true,
              orders: false,
              findUs: false,
            })
          }
        >
          <CustomText fontF={"medium"}>Data</CustomText>
        </Pressable>
        <Pressable
          onPress={() =>
            setScreens({
              ...screens,
              home: false,
              cart: false,
              data: false,
              orders: true,
              findUs: false,
            })
          }
        >
          <CustomText fontF={"medium"}>Orders</CustomText>
        </Pressable>
        <Pressable
          onPress={() =>
            setScreens({
              ...screens,
              home: false,
              cart: false,
              data: false,
              orders: false,
              findUs: true,
            })
          }
        >
          <CustomText fontF={"medium"}>FindUs</CustomText>
        </Pressable>
      </View> */}
      <CustomText style={[text4Xl, primaryColor]} fontF={"bold"}>
        Login
      </CustomText>
      <FormDataLogin />
    </View>
  );
}

const styles = StyleSheet.create({});

const {} = styles;

const { containerFontBox, primaryBackground, text4Xl, primaryColor } = themes;
