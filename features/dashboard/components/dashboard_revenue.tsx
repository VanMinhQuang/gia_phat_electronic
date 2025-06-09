import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const screenWidth = Dimensions.get('window').width;




const DashboardRevenue = () => (
    <View>
 
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
        <View style={styles.cardRow}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Revenue</Text>
            <Text style={styles.cardSubtitle}>September 2017</Text>
            <Text style={styles.cardValue}>IDR 10.237.500</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Today Orders</Text>
            <Text style={styles.cardValue}>1.570</Text>
          </View>
        </View>
      </ScrollView>
    </View>
      
);

export default DashboardRevenue;

const styles = StyleSheet.create({
 cardRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 16,
    gap: 16,
    height: screenWidth * 0.3 , 
  },
card: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 16,
  width: screenWidth * 0.5,
  height: screenWidth * 0.3 , 
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 10,
  marginRight: 16,
  borderWidth: 1,
  borderColor: '#eee', 
  borderTopWidth: 3,
  borderTopColor: '#FFD43B', 
  overflow: 'hidden'
},

  cardTitle: { color: '#999', fontSize: 12 },
  cardSubtitle: { fontSize: 12, color: '#aaa' },
  cardValue: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  recentTitle: { marginTop: 20, fontSize: 16, fontWeight: 'bold', color: '#fff' },
})
