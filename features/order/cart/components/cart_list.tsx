import { FlatList, StyleSheet } from "react-native";

import CartItemView from "./cart_item";
import { CartBrand } from "../../../../data/model/cart/cart_item";

type CartListProps = {
  cartBrands: CartBrand[];
};



const CartList: React.FC<CartListProps> = ({ cartBrands }) => (
  <FlatList
    data={cartBrands}
    keyExtractor={(item) => item.brand}
    contentContainerStyle={styles.listContent}
    renderItem={({ item }) => CartItemView(item)}
  />
);

const styles = StyleSheet.create({
  listContent: { paddingBottom: 100 },

});
export default CartList;

