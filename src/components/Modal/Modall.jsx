import { Modal, StyleSheet, View, } from "react-native";
import React from "react";
import { themes } from "../../styles/themes";
import { CustomText } from "../CustomText/CustomText";

export function Modall({ text, state, children }) {
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={state}>
        <View style={[container]}>
          <View style={[semiContainer, senaryBackground]}>
            <View>
              <CustomText
                style={[title, senaryColor, textLg, textCenter]}
                fontF={"semiBold"}
              >
                {text}
              </CustomText>
            </View>
            <View style={[contentBtns]}>{children}</View>
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
  title: {},
});

const { container, semiContainer, contentBtns, title } = styles;

const { senaryBackground, senaryColor, textLg, textCenter } = themes;
