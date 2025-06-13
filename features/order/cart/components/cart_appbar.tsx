import { Appbar } from "react-native-paper";

import { TextStyle, ViewStyle } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../../constant/colors/Color";


const CartAppBar = () => {
    const navigation = useNavigation();
    return (
        <Appbar.Header style={styles.header}>
           
            <Appbar.Action
                icon="arrow-left"
                color={Colors.white}
                onPress={() => navigation.goBack()}
            />
            <Appbar.Content
            title= {'Cart'}
            titleStyle={styles.title}
            style={{ alignItems: 'center' }}
            />
            <Appbar.Action icon="filter" color={Colors.white}  onPress={() => console.log('filter pressed')} />
         
        </Appbar.Header>
    );
}

const styles: { header: ViewStyle; title: TextStyle } = {
     header: {
    backgroundColor: Colors.primary,
    elevation: 8, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    height: hp('8%'), 
    paddingHorizontal: 8,
  },
     title: {
        color: Colors.white,
        fontWeight: 'bold' as TextStyle['fontWeight'],
        fontSize: 20,
        textAlign: 'center',
    },
};

export default CartAppBar;

