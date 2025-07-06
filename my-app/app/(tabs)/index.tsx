import AboutScreen from "@/components/review/about";
import DetailScreen from "@/components/review/detail";
import HomeScreen from "@/components/review/home";
import { OPENSANS_REGULAR } from "@/utils/const";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    // ✅ Gọi đúng cách
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return (
      <View style={styles.container}>
        <Text>Đang tải font...</Text>
      </View>
    );
  }

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen}
          options={{title:'Overview'}}
        />
        <Stack.Screen name="review-detail" component={DetailScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});

export default App;