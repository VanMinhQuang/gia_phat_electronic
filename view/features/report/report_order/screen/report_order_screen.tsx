import { View, Text, StyleSheet } from "react-native";
import ReportTypeAppbar from "../../components/report_type_appbar";
import ReportOrderBoard from "../components/report_order_board";
import ReportOrderList from "../components/report_order_list";
import { LinearGradient } from "expo-linear-gradient";
import { ColorGradient } from "../../../../../core/constant/colors/Color";
import { recentOrderMock } from "../../../../../core/data/model/dashboard/dashboard.mock";



const ReportOrder = () => (
        <LinearGradient style={styles.screen} colors={ColorGradient.primary} >
           <ReportTypeAppbar title ="Order Report" />
            <ReportOrderBoard/>
            <ReportOrderList orders={recentOrderMock}/>
        </LinearGradient>    
);

const styles = StyleSheet.create({
    screen:{
        flex: 1
    }
});

export default ReportOrder;