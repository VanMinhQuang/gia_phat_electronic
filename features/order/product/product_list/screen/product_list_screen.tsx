import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import ProductListAppbar from "../components/product_list_appbar";
import ProductListSearchBar from "../components/product_list_searchbar";


const ProductListScreen = () => {
    const navigator = useNavigation();
    return (
    
    <View style={styles.screen}>
        <ProductListAppbar/>
        <ProductListSearchBar />
     </View>   
)
};

const styles = StyleSheet.create({
    screen:{flex: 1}
});

export default ProductListScreen;