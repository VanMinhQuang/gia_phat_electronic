import { View , StyleSheet, Text} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ReportOrderItem from "./report_order_item";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { RecentOrder } from "../../../../../core/data/model/dashboard/dashboard.model";

type RecentOrderListProp = {
    orders: RecentOrder[]
}

const ReportOrderList: React.FC<RecentOrderListProp> = ({ orders }) => (
    <View style={styles.container}>
            <Text style={styles.textTitle}>Danh sach Don hang</Text>
            <FlatList
                data={orders}
                //keyExtractor={(item) => item.orderNbr}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => <ReportOrderItem order={item}/>}
            />
    </View>

);

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    padding: 20, 
    backgroundColor: Colors.background,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    elevation: 10,
  },
  listContent:{
    paddingBottom: 10
  },
  textTitle:{
    fontWeight: '500',
    fontSize:18,
    padding: 10
  }
})

export default ReportOrderList;