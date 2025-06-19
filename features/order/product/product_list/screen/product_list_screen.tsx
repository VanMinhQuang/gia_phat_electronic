import {  StyleSheet } from "react-native";
import { ProductCategory, ProductList, ProductListAppbar, ProductListSearchBar } from "../product_export";
import { productData } from '../../../../../data/model/product/product.mock';
import { SafeAreaView } from "react-native-safe-area-context";

const ProductListScreen = () => {
    return (
        <SafeAreaView style={styles.container} edges={['bottom']}  >
            <ProductListAppbar />
            <ProductCategory />
            <ProductListSearchBar />
            <ProductList products={productData} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default ProductListScreen;