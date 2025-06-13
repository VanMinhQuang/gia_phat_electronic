import { Appbar } from 'react-native-paper';
import Colors from '../../../constant/colors/Color';
import { TextStyle, ViewStyle } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigations/root_navigator';

const MainAppBar = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
      return (
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="account" color={Colors.white}  onPress={() => console.log('User pressed')} />
        <Appbar.Action icon="blank" style={{ opacity: 0 }} />
        <Appbar.Content
          title="G.P Electronics"
          titleStyle={styles.title}
          style={{ alignItems: 'center' }}
        />
        <Appbar.Action icon="magnify" color={Colors.white}  onPress={() => console.log('Search pressed')} />
        <Appbar.Action icon="cart" color={Colors.white}  onPress={() => navigation.navigate('CartScreen')} />
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

export default MainAppBar;