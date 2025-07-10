import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Product } from "../../../../../../core/data/model/product/product";
import CachedImage from "../../../../../../core/components/image/caches_image";
const ProductItem = (item: Product) => (
    <View style={styles.card}>
        <CachedImage 
      imageUrl={item.imageUrl}
      style={styles.image}
      transition={0}
      contentFit={"cover"} isAssest={false}        />
            <View style={{ padding: 8 }}>
              <Text numberOfLines={2} style={styles.productName}>{item.name}</Text>
              <Text style={styles.price}>{item.price} TL</Text>
            </View>
            <TouchableOpacity style={styles.addIcon}>
              <Ionicons name= "add" size={20} color="#000" />
            </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    card:{
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 120,
    },
    price: {
        marginTop: 4,
        color: '#555',
        fontWeight: '600',
  },
   productName: {
    fontSize: 14,
    fontWeight: '500',
  },
   addIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 2,
  },
});

export default ProductItem;