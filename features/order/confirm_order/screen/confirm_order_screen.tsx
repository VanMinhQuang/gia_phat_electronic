import { View, StyleSheet, FlatList } from "react-native";
import ConfirmOrderAppBar from "../components/confirm_order_appbar";
import ConfirmOrderBottom from "../components/confirm_order_bottom_button";

import ConfirmOrderListItem from "../components/confirm_order_list_item";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { cartData } from './../../../../data/model/cart/cart_mock';
import ConfirmOrderPaymentMethod from "../components/confirm_order_payment_method";

const ConfirmOrderScreen = () => {

    const amount = 150000
    return (
    <SafeAreaView style={styles.screen} edges={['bottom']}>
        <ConfirmOrderAppBar/>
        <ScrollView contentContainerStyle = {styles.scrollview}>
            <ConfirmOrderListItem cartBrands={cartData}/>
            <ConfirmOrderPaymentMethod amount={amount}/>
        </ScrollView>

   
        <ConfirmOrderBottom onPress={() => {}}/>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column'
    },
    scrollview:{
        paddingBottom: 100
    }
});

export default ConfirmOrderScreen;