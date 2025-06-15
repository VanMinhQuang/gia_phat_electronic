import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button } from "react-native-paper";


const ProductListScreen = () => {
    const navigator = useNavigation();
    return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '100%', height: '100%' }}>
            <Button
                mode="contained"
                onPress={() => navigator.goBack()}
                style={{ margin: 20 }} children={'hihi'}                />
        </View>
     </View>   
)
};

export default ProductListScreen;