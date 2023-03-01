import { StyleSheet, Text, View, Button } from "react-native";
import { themes } from "../../styles/themes";

export function Notes({ data, onPress }) {
  return (
    <View style={[container, tertiaryBorderColor]}>
      <Text style={[styleText, textXl, textCenter, fontSemiBold, senaryColor]}>
        {data.data}
      </Text>
      <Button title="deleted Info" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    borderWidth: 2,
    padding: 10,
    marginVertical: 50,

    // borderColor: "red",
    borderRadius: 10,
  },
  styleText: {
    margin: 10,
    padding: 10,
  },
});

const { container, styleText } = styles;
const { tertiaryBorderColor, senaryColor, textCenter, fontSemiBold, textXl } =
  themes;
