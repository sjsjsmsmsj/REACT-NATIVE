import { Button } from 'react-native';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
export default function HomeScreen() {
  const [students, setStudents] = useState([
    { id: 1, name: "Thinh", 'age': 20 }, 
    { id: 2, name: "Thinh2", 'age': 20 }, 
    { id: 3, name: "Thinh3", 'age': 20 }, 
    { id: 4, name: "Thinh4", 'age': 20 }, 
    {id: 5, name: "Thinh5", 'age': 20}, 
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={item => item.id + ""}
        renderItem={data => {
          return (
            <View style={{padding: 15, backgroundColor: 'pink', marginBottom: 10}}>
              <Text>{data.item.name}</Text>
            </View>
          )
        }}
      />
      {/* <Text style={{fontSize: 60}}>
        Hello world
      </Text>
      <ScrollView>
        {students.map(item => {
          return (
            <View key={item.id} style={{padding: 15, backgroundColor: 'pink', marginBottom: 10}}>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50, 
    paddingHorizontal: 20,
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hello1: {
    color: 'pink',
    width: 200, 
    borderColor: 'green', 
    borderWidth: 2
  },
  header: {
    fontSize: 30, 
    fontWeight: "600"
  }, 
  parent: {
    color: 'red',
    fontSize: 30
  }, 
  child: {
    color: 'blue', 
    fontSize: 20
  }
});
