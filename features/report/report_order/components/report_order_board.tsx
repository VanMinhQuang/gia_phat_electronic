import { View, StyleSheet, Text } from "react-native";
import { Colors } from "../../../../constant/colors/Color";




const ReportOrderBoard = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Doanh thu từ 24/12/2024 - 25/12/2024</Text>
      <Text style={styles.cardValue}>Tổng tiền: 2000000</Text>
      <View style={styles.cardSub}>
          <Text style={styles.cardSubValue}>Tổng số đơn hàng:</Text>
          <Text> 10</Text>
      </View>
      
    </View>
);

const styles = StyleSheet.create({
    card: {
        elevation: 4,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginTop: 10,
        width: "85%", 
        height: "20%", 
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 10,
        marginHorizontal: 8, 
        borderWidth: 1,
        borderColor: '#eee', 
        borderTopWidth: 3,
        borderTopColor: '#FFD43B', 
        overflow: 'hidden',
        alignSelf:'center',
       justifyContent: "space-between",

},
  cardTitle: { color: Colors.textSecondary, fontSize: 16, textAlign:'center' },
  cardSubtitle: { fontSize: 16, color: '#aaa' },
  cardValue: { fontSize: 25, fontWeight: 'bold', color: '#333', textAlign:'center', padding: 8 },
  cardSub:{
    flexDirection:"row",
    justifyContent:'space-between'
  },
  cardSubValue: {
    fontSize: 13,
    color: Colors.textSecondary,
    
    alignSelf: "flex-end", 
  },
});

export default ReportOrderBoard;