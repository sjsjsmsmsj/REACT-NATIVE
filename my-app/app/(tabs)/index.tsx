import { Button } from 'react-native';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
export default function HomeScreen() {
  

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(1);
  
  return (
    <View style={styles.container}>
      <View>
        <Text>Name: {name}</Text>
        <TextInput
          multiline
          autoCapitalize={"words"}
          onChangeText={(value) => setName((value))} style={{
          borderColor: 'green', 
          borderWidth: 1, 
          width: 200, 
          padding: 15
        }} />
      </View>

      <View>
        <Text>Age: {age}</Text>
        <TextInput onChangeText={(value) => setAge(Number(value))} style={{
          borderColor: 'green', 
          borderWidth: 1, 
          width: 200, 
          padding: 15
        }}
          keyboardType="numeric"
          maxLength={2}
        />
      </View>

        <Text style={styles.parent}>
        {count}
      </Text>
      <View> 
        <Button title="Increase" onPress={() => {
          setCount(count + 1)
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
