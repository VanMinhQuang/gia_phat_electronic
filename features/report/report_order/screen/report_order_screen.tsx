import { View, Text, StyleSheet } from "react-native";
import ReportTypeAppbar from "../../components/report_type_appbar";


const ReportOrder = () => (
        <View style={styles.screen}>
           <ReportTypeAppbar title ="Order Report" />
            <View style={{ padding: 20, backgroundColor: '#f0f0f0', borderRadius: 10 }}>
               <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Order Report</Text>
            </View>
        </View>    
);

const styles = StyleSheet.create({
    screen:{
        flex: 1
    }
});

export default ReportOrder;