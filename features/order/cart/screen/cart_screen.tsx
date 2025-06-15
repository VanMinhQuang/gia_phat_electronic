import React from 'react';
import { View, StyleSheet, Alert,} from 'react-native';
import CartAppBar from '../components/cart_appbar';
import CartList from '../components/cart_list';
import CartFooter from '../components/cart_footer';
import Colors from '../../../../constant/colors/Color';
import FAB from 'react-native-animated-fab';
import { cartData } from '../../../../data/model/cart/cart_mock';
import { useNavigation } from '@react-navigation/native';

import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../navigations/root_navigator';




const CartScreen = () => {
  const navigator = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.screen}>
        <CartAppBar/>
      <CartList cartBrands={cartData}/>
      <CartFooter />  
      <FAB
        renderSize={60}
        borderRadius={30}
        style={styles.fab}

        backgroundColor={Colors.primary}
        onPress={() => navigator.navigate('ProductListScreen')}
        draggable

      />
    </View>
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
    bottom: 20,
    right: 20,

    elevation: 5,
  },
 
 
});

export default CartScreen;
