import { View, StyleSheet, FlatList } from "react-native";
import ConfirmOrderAppBar from "../components/confirm_order_appbar";
import ConfirmOrderBottom from "../components/confirm_order_bottom_button";
import ConfirmOrderListItem from "../components/confirm_order_list_item";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { cartData } from './../../../../data/model/cart/cart_mock';
import ConfirmOrderPaymentMethod from "../components/confirm_order_payment_method";
import { LinearGradient } from "expo-linear-gradient";
import { ColorGradient } from "../../../../constant/colors/Color";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../navigations/root_navigator";

const ConfirmOrderScreen = () => {
  const amount = 150000;
  const navigator = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <LinearGradient style={styles.screen} colors={ColorGradient.primary}>
      <SafeAreaView style={styles.safeArea} edges={[ 'left', 'right']}>
        <ConfirmOrderAppBar />

        <ScrollView contentContainerStyle={styles.scrollview}>
          {/* <ConfirmOrderListItem cartBrands={cartData} /> */}
          <ConfirmOrderPaymentMethod amount={amount} />
        </ScrollView>
      </SafeAreaView>

      <SafeAreaView edges={['bottom']} style={styles.bottomSafe}>
        <ConfirmOrderBottom onPress={() => {navigator.navigate('ResultOrderScreen')}} />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  safeArea: {
    flex: 1,
  },
  bottomSafe: {
    backgroundColor: 'transparent',
  },
  scrollview: {
    paddingBottom: 100,
  },
});

export default ConfirmOrderScreen;
