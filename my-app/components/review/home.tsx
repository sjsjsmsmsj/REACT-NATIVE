import { globalStyles } from "@/utils/const";
import { Button } from "react-native";
import { View, Text } from "react-native"

const HomeScreen = (props: any) => {
    const { navigation } = props; 

    return (
        <View>
            <Text style={globalStyles.globalFont}>Home Screen</Text>
            <Button title="VIEW DETAIL" onPress={() => navigation.navigate("review-detail")} />
        </View>
    )
}

export default HomeScreen;