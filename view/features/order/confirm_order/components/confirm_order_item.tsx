import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { CartBrand } from "../../../../../core/data/model/cart/cart_item";
import CachedImage from "../../../../../core/components/image/caches_image";


const ConfirmOrderItem = (item: CartBrand) => (
    <View style={styles.brandSection}>
        
                <View style={styles.brandHeader}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="lock-outline" size={16} color="#999" />
                    <Text style={styles.brandName}>{item.brand}</Text>
                  </View>
                  <Text style={styles.viewBrand}>view brand</Text>
                </View>
    
                {item.items.map((product) => (
                  <View style={styles.productCard} key={product.id}>
                    <CachedImage
                      imageUrl={product.image}
                      style={styles.productImage}
                      contentFit={"cover"}
                      transition={1000} isAssest={false}                      />
                    <View style={styles.productDetails}>
                      <Text style={styles.productName}>{product.name}</Text>
                      <Text style={styles.productDesc}>{product.description}</Text>
                      <Text style={styles.productPrice}>$ {product.price.toFixed(2)}</Text>
                    </View>
                    {/* Quantity Controls */}
                    <View style={styles.qtyControls}>
                      <Text style={styles.qtyText}>{product.quantity}</Text>
                    </View>
                  </View>
                ))}
    </View>
);

const styles = StyleSheet.create({
     brandSection: {
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 12,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  brandHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  brandName: {
    marginLeft: 8,
    fontWeight: '600',
    fontSize: 16,
  },
  viewBrand: {
    color: '#999',
    fontSize: 12,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },
  productImage: {
    width: wp("12%"),
    height: hp("8%"),
    borderRadius: 12,
    marginRight: 12,
   
  },
  productDetails: { flex: 1 },
  productName: { fontWeight: '600' },
  productDesc: { color: '#999', fontSize: 12 },
  productPrice: { marginTop: 4, fontWeight: 'bold' },
  qtyControls: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color: Colors.primary,
  },
  qtyText: {
    fontSize: 16,
    marginVertical: 4,
  },
});
export default ConfirmOrderItem;

function wp(arg0: string): any {
  throw new Error("Function not implemented.");
}
function hp(arg0: string): any {
  throw new Error("Function not implemented.");
}

