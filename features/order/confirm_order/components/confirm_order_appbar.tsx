import { useNavigation } from "@react-navigation/native";
import { StatusBar, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ConfirmOrderAppBar = () => {
    const navigator = useNavigation();
    return (
        <View>
             <StatusBar translucent backgroundColor="transparent" />
                  <View style={styles.appBar}>
                    <TouchableOpacity onPress={() => navigator.goBack()}>
                      <Icon name="chevron-left" size={28} />
                    </TouchableOpacity>
                    <Text style={styles.appBarTitle}>Confirm</Text>
                    <View/>
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
export default ConfirmOrderAppBar;