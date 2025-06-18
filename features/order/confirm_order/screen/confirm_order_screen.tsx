import { View, StyleSheet } from "react-native";
import ConfirmOrderAppBar from "../components/confirm_order_appbar";
import ConfirmOrderBottom from "../components/confirm_order_bottom_button";
import { Image } from "expo-image";

const ConfirmOrderScreen = () => {
    const bank = '970422';
    const bankNumber = '0001004448704';
    const amount = '100000'
    return (
    <View style={styles.screen}>
        <ConfirmOrderAppBar/>
        <Image
           source={{
             uri: `https://img.vietqr.io/image/${bank}-${bankNumber}-compact2.jpg?amount=${amount}`,
            }}
            style={{ width: 300, height: 300 }} // Add size to see the image
            contentFit="contain"
        />
        <ConfirmOrderBottom onPress={() => {}}/>
    </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default ConfirmOrderScreen;