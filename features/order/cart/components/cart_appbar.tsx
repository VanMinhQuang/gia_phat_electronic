import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { View,StatusBar, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


const CartAppBar = () => {
    const navigator = useNavigation();
    return (
        <View>
             <StatusBar translucent backgroundColor="transparent" />
                  <View style={styles.appBar}>
                    <TouchableOpacity onPress={() => navigator.goBack()}>
                      <Icon name="chevron-left" size={28} />
                    </TouchableOpacity>
                    <Text style={styles.appBarTitle}>Cart</Text>
                    <TouchableOpacity>
                      <Icon name="trash-can-outline" size={24} />
                    </TouchableOpacity>
                  </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
});

export default CartAppBar;

