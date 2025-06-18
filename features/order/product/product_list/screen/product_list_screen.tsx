import {  StyleSheet, SafeAreaView } from "react-native";
import { ProductCategory, ProductList, ProductListAppbar, ProductListSearchBar } from "../product_export";
import { productData } from '../../../../../data/model/product/product.mock';

const ProductListScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
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