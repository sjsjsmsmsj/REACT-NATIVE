import { Text,View, StyleSheet } from "react-native"


const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}>
                <Text>Item 1</Text>
            </View>
            <View style={styles.item2}>
                <Text>Item 2</Text>
            </View>
            <View style={styles.item3}>
                <Text>Item 3</Text>
            </View>
            <View style={styles.item4}>
                <Text>Item 4</Text>
            </View>
            <View style={styles.item5}>
                <Text>Item 5</Text>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10, 
        backgroundColor: 'white', 
        flexDirection: "row", 
        justifyContent: 'center', 
        borderWidth: 1, 
        borderColor: 'red', 
        alignItems: 'center'
    },
    item1: {
        backgroundColor: 'blue',
        padding: 20
    }, 
    item2: {
        backgroundColor: 'red', 
        padding: 20
    },
    item3: {
        backgroundColor: 'green', 
        padding: 20
    }, 
    item4: {
        backgroundColor: 'grey', 
        padding: 20
    }, 
    item5: {
        backgroundColor: 'pink', 
        padding: 20
    }
})

export default FlexBox;