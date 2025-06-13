import { View, Text } from "react-native";
import { StyleSheet } from 'react-native';
import CartAppBar from "../components/cart_appbar";
import { Card } from "react-native-paper";
const CartScreen = () => (
    <View style = {styles.screen}>
        <CartAppBar/>
        <Card style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Cart Screen</Text>
        </Card>
    </View>
);


const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },

}
);

export default CartScreen;