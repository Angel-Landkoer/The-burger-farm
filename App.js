import { useState } from 'react';
import { Button, FlatList, TextInput, SafeAreaView, StyleSheet, Text, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { themes } from './src/styles/themes';
import { Notes } from './src/components/Notes/Notes';

export default function App() {
  const [formData, setFormData] = useState('')
  const [card, setCard] = useState([])
  const [remove, setRemove] = useState([])

  const handleChangeValue = (e) => setFormData(e)

  const resetInfo = () => setFormData('')

  const list = () => {
    if (formData.length > 0) {
      setCard([...card, { date: `${Date.now()}`, data: formData }])
      resetInfo()
    } else {
      Alert.alert("Write a Note")
    }
  }

  const deleted = (id) => {
    const index = card.findIndex(item => item.date === id)

    const removeIndex = card.splice(index, 1)
    setRemove(removeIndex)
  }

  return (
    <SafeAreaView style={[container]} >
      <StatusBar style='light' backgroundColor='black' />
      <Text style={[title, text3Xl, textCenter]} >{`NOTES: ${card.length}`}</Text>
      <TextInput
        style={[stylesInput, textCenter, tertiaryBorderColor]}
        inputMode="decimal"
        placeholder='Write a Note'
        placeholderTextColor={"#BDBFC3"}
        onChangeText={handleChangeValue}
        editable
        value={formData}
      />
      <Button title='Send Info' onPress={list} />
      <FlatList
        data={card}
        renderItem={items => <Notes data={items.item} onPress={() => deleted(items.item.date)} />}
        keyExtractor={item => item.date}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    width: "100%",
    height: "100%",

    paddingHorizontal: 20,
    paddingVertical: 50,
    marginVertical: 20,

    backgroundColor: "#202c2f",
  },
  stylesInput: {
    width: 250,
    height: 40,
    borderWidth: 2,
    marginVertical: 40,
    paddingHorizontal: 5,

    color: "#BDBFC3",
    borderRadius: 20,
    borderColor: "#BDBFC3"
  },
  title: {
    color: "#BDBFC3",
  }
})
const { container, stylesInput, title } = styles
const { tertiaryBorderColor, textCenter, text3Xl } = themes