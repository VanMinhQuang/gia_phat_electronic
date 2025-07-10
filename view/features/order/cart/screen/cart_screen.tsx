import React from 'react';
import { View, StyleSheet, Alert,} from 'react-native';
import CartAppBar from '../components/cart_appbar';
import CartList from '../components/cart_list';
import CartFooter from '../components/cart_footer';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigations/root_navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ColorGradient } from '../../../../../core/constant/colors/Color';
import { cartData } from '../../../../../core/data/model/cart/cart_mock';
import FloatingButton from '../../../../../core/components/button/floating_button';



const CartScreen = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (

    <LinearGradient style={styles.screen} colors={ColorGradient.primary}>
      <SafeAreaView style = {styles.screen} edges={[ 'left', 'right', 'bottom']}>
        <CartAppBar/>
        <CartList cartBrands={cartData}/>
        <CartFooter onPress={() => {navigator.navigate('ConfirmOrderScreen')}}/>   
        <FloatingButton onPress={() => {
          navigator.navigate('ProductListScreen')}
          }/>
      </SafeAreaView>
      
     
     


    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  screen: { flex: 1,  position: 'relative' },
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
