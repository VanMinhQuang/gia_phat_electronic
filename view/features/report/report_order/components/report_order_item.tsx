import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { RecentOrder } from "../../../../../core/data/model/dashboard/dashboard.model";

type ReportOrderProps = {
  order: RecentOrder;
};

const ReportOrderItem: React.FC<ReportOrderProps> = ({order}) => (
        <View key={order.orderNbr} style={styles.orderItem}>
                <View style={styles.orderIcon} />
                <View>
                  <Text style={styles.orderText}>#{order.orderNbr}</Text>
                  <Text style={styles.orderName}>{order.custName}</Text>
                </View>
                <View style={{ marginLeft: 'auto' }}>
                  <Text style={styles.orderAmount}>{order.total}</Text>
                  <Text style={styles.orderTime}>{order.orderDate.toUTCString()}</Text>
                </View>
              </View>
);

const styles = StyleSheet.create({
     orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
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

export default ReportOrderItem;