import AboutScreen from "@/components/review/about";
import DetailScreen from "@/components/review/detail";
import HomeScreen from "@/components/review/home";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  const [loaded, error] = useFonts({
    'LamGiaThinh': require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    // Gọi khi app mount để giữ splash screen lại
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    // Khi load xong thì hide splash
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
    <View style={styles.container}>
      <HomeScreen />
      <DetailScreen />
      <AboutScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default App;
