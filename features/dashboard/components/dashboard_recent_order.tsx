import { View, Text, StyleSheet, Dimensions } from "react-native";
import DashboardRevenue from "./dashboard_revenue";
import { Card } from "react-native-paper";
const screenWidth = Dimensions.get('window').width;


var orders = [
          { id: 3547, name: 'Amelia Marsha', amount: 'IDR 175.000', time: '30 min ago' },
          { id: 3546, name: 'Vina Caroline', amount: 'IDR 243.000', time: '47 min ago' },
           { id: 3548, name: 'Vina Caroline', amount: 'IDR 243.000', time: '47 min ago' },
            { id: 3542, name: 'Vina Caroline', amount: 'IDR 243.000', time: '47 min ago' },
             { id: 3541, name: 'Vina Caroline', amount: 'IDR 243.000', time: '47 min ago' },
        ];

const DashboardOrder = () => (
  <View style={styles.container}>
    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>Recent Orders</Text>
    {orders.map(item => (
      <View key={item.id} style={styles.orderItem}>
        <View style={styles.orderIcon} />
        <View>
          <Text style={styles.orderText}>#{item.id}</Text>
          <Text style={styles.orderName}>{item.name}</Text>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Text style={styles.orderAmount}>{item.amount}</Text>
          <Text style={styles.orderTime}>{item.time}</Text>
        </View>
      </View>
    ))}
  </View>
);

export default DashboardOrder;

const styles = StyleSheet.create({
 container: { 
    flex: 1, 
    marginTop: 20,
    padding: 20, 
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // Optional: add shadow for card effect
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
 orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 12,
    padding: 12,
  },
  orderIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFD43B',
    marginRight: 12,
  },
  orderText: { fontWeight: 'bold' },
  orderName: { fontSize: 12, color: '#777' },
  orderAmount: { fontWeight: 'bold', textAlign: 'right' },
  orderTime: { fontSize: 12, color: '#aaa', textAlign: 'right' },
})
