import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])

  const onHandleChangeItem = (text) => {
    setTextValue(text)
  }

  const addItem = () => {
    setItemsList(prevState => [...prevState, { value: textValue }])
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='item de lista'
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button
          title='Add'
          color={'black'}
          onPress={addItem}
        />
      </View>
      <View style={styles.listContainer}>
        {itemsList.map((item) => (
          <Text style={styles.textItem}>{item.value}</Text>
        ))}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    width: '89%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 30,
    paddingLeft: 5,
  },
  textItem: {
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  }
});


{/* <Text style={styles.textItem}>Item 1</Text>
<Text style={styles.textItem}>Item 2</Text>
<Text style={styles.textItem}>Item 3</Text> */}