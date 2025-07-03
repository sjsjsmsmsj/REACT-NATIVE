import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Lam gia thinh</Text>
        <Text style={styles.parent}>
          Lam gia thinh 2 
          <Text style={styles.child}>Bla bla</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>Hello World 👋 from Expo Router!</Text>
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
