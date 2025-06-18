import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../../../constant/colors/Color";

        

type Props = { onPress: () => void };


const ConfirmOrderBottom = ({ onPress }: Props) => (
            <View style={styles.footer}>
                <View style = {styles.total}>
                    <Text style={styles.textAmount}>Confirm</Text>
                    <Text style={styles.textAmount}>$12</Text>
                </View>
                 
                <TouchableOpacity style={styles.confirmButton} onPress={onPress}>
                    <Text style={styles.text}>Confirm</Text>
                </TouchableOpacity>
              </View>
);

const styles = StyleSheet.create({
     footer: {
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#fff',
            left: 0,
            right: 0,
            padding: 14,
            paddingBottom: 40,
            
            alignItems: 'center',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            elevation: 10,
            height: 130,
            flexDirection: 'column'
  },
    confirmButton:{
       
        backgroundColor: Colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 100,
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    total:{
        paddingTop: 3,
        paddingBottom: 6,
         flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
    },
    text:{
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold'
    },
     textAmount:{
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold'
    }
    
});

export default ConfirmOrderBottom;