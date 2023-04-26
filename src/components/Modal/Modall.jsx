import { Modal, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from "../../styles/normalize.js";

export function Modall({ title, state, btns }) {
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={state}>
        <View style={[container]}>
          <View style={[semiContainer, senaryBackground]}>
            <View>
              <CustomText
                style={[styleTitle, senaryColor, , textCenter]}
                fontF={"semiBold"}
              >
                {title}
              </CustomText>
            </View>
            <View style={[contentBtns]}>
              {btns.map((item, i) => (
                <Pressable
                  onPress={item.actionState}
                  style={[modalBtn, septenaryBackground]}
                  key={`btnModal-${i}`}
                >
                  <CustomText
                    style={[textModalBtn, senaryColor]}
                    fontF={"semiBold"}
                  >
                    {item.textBtn}
                  </CustomText>
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  semiContainer: {
    justifyContent: "space-around",
    alignItems: "center",

    minWidth: 200,
    width: widthPixel(240),
    maxWidth: widthPixel(250),
    minHeight: 180,
    height: "100%",
    maxHeight: heightPixel(200),
    paddingHorizontal: pixelSizeHorizontal(5),
    paddingVertical: pixelSizeVertical(5),

    borderRadius: 10,
  },
  contentBtns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    width: "100%",
  },
  styleTitle: {
    fontSize: fontPixel(11),
  },
  modalBtn: {
    justifyContent: "center",
    alignItems: "center",

    minWidth: 100,
    width: widthPixel(60),
    minHeight: 40,
    height: heightPixel(30),

    borderRadius: 40,
  },
  textModalBtn: {
    fontSize: fontPixel(9),
  },
});

const {
  container,
  semiContainer,
  contentBtns,
  styleTitle,
  modalBtn,
  textModalBtn,
} = styles;

const { senaryBackground, senaryColor, textCenter, septenaryBackground } =
  themes;
