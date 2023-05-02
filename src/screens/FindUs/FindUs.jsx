import { StyleSheet, View } from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";
import { themes } from "../../styles/themes";
import { useSelector } from "react-redux";
import { regions } from "../../utils/regions";

export function FindUs({ navigation }) {
  const [findRegion, setFindRegion] = useState(null);

  const data = useSelector((state) => state.auth.allDataUser);
  const registed = useSelector((state) => state.auth.existemAccount);

  useEffect(() => {
    (() => {
      const existemData = data?.address;

      if (!existemData) return setFindRegion({});

      return setFindRegion(
        regions.find((item) => item.name == data?.address.city)
      );
    })();
  }, [registed]);

  return (
    <View style={[container, primaryBackground]}>
      <MapView region={findRegion?.region} style={styleMap} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  styleMap: { width: "100%", height: "100%" },
});

const { styleMap, container } = styles;

const { primaryBackground } = themes;
