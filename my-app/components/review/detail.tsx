import { OPENSANS_REGULAR } from "@/utils/const";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native"

const styles = StyleSheet.create({
    review: {
        fontSize: 30, 
        fontFamily: OPENSANS_REGULAR, 

    }
})

const DetailScreen = () => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text style={styles.review}>Detail Screen google</Text>
            <Button title="Go Home" onPress={ () => navigation.navigate("Home") } />
        </View>
    )
}

export default DetailScreen;