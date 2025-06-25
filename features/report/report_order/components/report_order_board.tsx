import { View, StyleSheet, Text } from "react-native";




const ReportOrderBoard = () => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Doanh thu từ 24/12/2024 - 25/12/2024</Text>
      <Text style={styles.cardValue}>50/100</Text>
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
        height: "25%", 
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
        justifyContent:'center'

},
     cardTitle: { color: '#999', fontSize: 16, textAlign:'center' },
  cardSubtitle: { fontSize: 16, color: '#aaa' },
  cardValue: { fontSize: 20, fontWeight: 'bold', color: '#333', textAlign:'center', padding: 8 },
});

export default ReportOrderBoard;