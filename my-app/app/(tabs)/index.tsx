import { Alert, Button, FlatList, TextInput, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import FlexBox from '../../components/FlexBox'

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
    // <View style={styles.container}>
    //   <Text style={styles.header}>ToDo App</Text>
    //   <TextInput
    //     value={toDo}
    //     style={styles.toDoInput}
    //     onChangeText={setToDo}
    //     placeholder="Enter your task..."
    //   />
    //   <Button title={'Add ToDo'} onPress={handleAddToDo} />
    //   <View style={styles.body}>
    //     <FlatList
    //       data={listToDo}
    //       keyExtractor={(item) => item.id.toString()}
    //       renderItem={({ item }) => (
    //         <TouchableOpacity onPress={() => deleteToDo(item.id)}>
    //           <Text style={styles.list}>{item.name}</Text>
    //         </TouchableOpacity>
    //       )}
    //     />
    //   </View>
    // </View>
    <FlexBox/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: 'orange',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 60,
  },
  toDoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    margin: 15,
  },
  body: {
    margin: 15,
  },
  list: {
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10,
    margin: 10,
  }
});
