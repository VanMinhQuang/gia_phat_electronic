import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "./product_list_item";
import { Product } from "../../../../../../core/data/model/product/product";

type ProductListProps = {
  products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => (

    <FlatList
      numColumns={2}
      data={products}
      keyExtractor={(item) => item.id}
      columnWrapperStyle={styles.gridRow}
      contentContainerStyle={styles.gridContainer}
      renderItem={({ item }) => <ProductItem {...item} />}
      showsVerticalScrollIndicator={true}
    />
);

const styles = StyleSheet.create({
   gridRow: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridContainer: {
    padding: 16,
    paddingBottom: 80,
    flexGrow: 1,
  },

});
export default ProductList;