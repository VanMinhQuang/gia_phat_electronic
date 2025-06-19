
import { View, Text, StyleSheet } from "react-native";
import { CartBrand } from "../../../../data/model/cart/cart_item";
import { FlatList } from "react-native-gesture-handler";
import ConfirmOrderItem from "./confirm_order_item";

type CartListProps = {
  cartBrands: CartBrand[];
};

const ConfirmOrderListItem : React.FC<CartListProps> = ({cartBrands}) => (
    <View style={styles.cardContainer}>
        <Text style ={styles.headerText}>Tổng đơn hàng</Text>
        {cartBrands.map(i => <ConfirmOrderItem key={i.brand} {...i}/>)}
    </View>
);

const styles = StyleSheet.create({
    cardContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    elevation: 4, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 8,
  },
});
export default ConfirmOrderListItem;