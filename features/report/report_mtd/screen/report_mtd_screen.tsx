import { View, Text } from "react-native";
import ReportTypeAppbar from "../../components/report_type_appbar";

const ReportMTD = () => (
    <View style={{ flex: 1}}>
         <ReportTypeAppbar title ="Order Report" />
        <View style={{ padding: 20, backgroundColor: '#f0f0f0', borderRadius: 10 }}>
           <Text style={{ fontSize: 18, fontWeight: 'bold' }}>MTD Report</Text>
        </View>
    </View>    
);

export default ReportMTD;