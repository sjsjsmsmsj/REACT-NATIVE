import { Alert, Button, FlatList, TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import FlexBox from '../../components/FlexBox'
import AntDesign from '@expo/vector-icons/AntDesign';

interface ITodo {
  id: number;
  name: string;
}

export default function HomeScreen() {
  const [toDo, setToDo] = useState("");
  const [listToDo, setListToDo] = useState<ITodo[]>([]);

  function randint(min: number, max: number) {
    return Math.round((Math.random() * Math.abs(max - min)) + min);
  }

  const handleAddToDo = () => {
    if (!toDo.trim()) {
      Alert.alert("Error", "ToDo must not be empty",
        [
      {
        text: 'Cancel',
        onPress: () => Alert.alert('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          'This alert was dismissed by tapping outside of the alert dialog.',
        ),
    },
      );
      return;
    }
    setListToDo([...listToDo, { id: randint(1, 1000), name: toDo }]);
    setToDo("");
  }

  const deleteToDo = (id: number) => {
    const newToDo = listToDo.filter(item => item.id !== id);
    setListToDo(newToDo);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ToDo App</Text>
      <View style={styles.form}>
        <TextInput
          value={toDo}
          style={styles.toDoInput}
          onChangeText={setToDo}
          placeholder="Enter your task..."
        />
        <Button title={'Add ToDo'} onPress={handleAddToDo} />
      </View>

      <View style={styles.todo}>
        <FlatList
          data={listToDo}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => deleteToDo(item.id)}>
              <View style={styles.groupToDo}>
                <Text style={styles.list}>{item.name} </Text>
                <AntDesign name="close" size={24} color="black" />
              </View>
              
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  groupToDo: {
    flexDirection: "row", 
    alignItems: 'center', 
    justifyContent: 'space-between',
    borderWidth: 1,
    borderStyle: "dashed",
  },
  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 60,
    flex: 1
  }, 
  form: {
    flex: 1
  },
  todo: {
    flex: 8
  },
  toDoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    margin: 15,
  },
  body: {
    margin: 15,
    flex: 1
  },

  list: {
    borderColor: "grey",

    padding: 10,
    margin: 10,
  }
});
