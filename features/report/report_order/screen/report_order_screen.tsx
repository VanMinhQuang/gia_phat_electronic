import { View, Text, StyleSheet } from "react-native";
import ReportTypeAppbar from "../../components/report_type_appbar";
import ReportOrderBoard from "../components/report_order_board";
import ReportOrderList from "../components/report_order_list";
import { recentOrderMock } from "../../../../data/model/order/order.mock";
import { LinearGradient } from "expo-linear-gradient";
import { ColorGradient } from "../../../../constant/colors/Color";



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