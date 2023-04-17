import { Modal, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";

export function Modall({ title, state, btns }) {
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={state}>
        <View style={[container]}>
          <View style={[semiContainer, senaryBackground]}>
            <View>
              <CustomText
                style={[styleTitle, senaryColor, textLg, textCenter]}
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
                    style={[textModalBtn, senaryColor, textLg]}
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

    width: 300,
    height: 200,
    padding: 10,

    borderRadius: 5,
  },
  contentBtns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    width: "90%",
  },
  styleTitle: {},
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
  semiContainer,
  contentBtns,
  styleTitle,
  modalBtn,
  textModalBtn,
} = styles;

const {
  senaryBackground,
  senaryColor,
  textLg,
  textCenter,
  septenaryBackground,
} = themes;
