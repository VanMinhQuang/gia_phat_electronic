import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../../../constant/colors/Color";

const CartFooter = () => (
       <View style={styles.footer}>
            <View>
              <Text style={styles.amountLabel}>Amount Price</Text>
              <Text style={styles.amount}>$ 55.08</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Check Out</Text>
              <View style={styles.checkoutBadge}>
                <Text style={styles.checkoutBadgeText}>4</Text>
              </View>
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
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 10,
  },
  amountLabel: {
    color: '#999',
    fontSize: 12,
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 100,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 8,
  },
  checkoutBadge: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.text,
  },

});

export default CartFooter;