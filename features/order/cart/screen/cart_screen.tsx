import React from 'react';
import { View, StyleSheet, Alert,} from 'react-native';
import CartAppBar from '../components/cart_appbar';
import CartList from '../components/cart_list';
import CartFooter from '../components/cart_footer';
import { cartData } from '../../../../data/model/cart/cart_mock';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigations/root_navigator';
import FloatingButton from '../../../../components/button/floating_button';
import { SafeAreaView } from 'react-native-safe-area-context';
import {ColorGradient, Colors} from '../../../../constant/colors/Color';
import { LinearGradient } from 'expo-linear-gradient';



const CartScreen = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (

    <LinearGradient style={styles.screen} colors={ColorGradient.primary}>
    
      
      <CartAppBar/>
      {/* <CartList cartBrands={cartData}/> */}
      <CartFooter onPress={() => {navigator.navigate('ConfirmOrderScreen')}}/>   
      <FloatingButton onPress={() => {navigator.navigate('ProductListScreen')}}/>
     


    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Colors.background, position: 'relative' },
  appBar: {
    marginTop: 40,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

     fab: {
    position: 'absolute',
    margin: 16,
    marginBottom: 100,
    right: 0,
    bottom: 0,
    borderRadius: 32
  },
 
 
});

export default CartScreen;
