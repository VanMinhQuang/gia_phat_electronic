
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";


const screenWidth = Dimensions.get('window').width;



type CardSileProps = {
  title: string;
  subtitle: string;
  value: string | number;
};

// Mock data for the card carousel
const cardData: CardSileProps[] = [
  { title: 'Doanh thu hôm nay', subtitle: 'Tổng doanh thu', value: '₫12,000,000' },
  { title: 'Đơn hàng hôm nay', subtitle: 'Số lượng đơn', value: 32 },
  { title: 'Khách mới', subtitle: 'Khách hàng mới', value: 5 },
  { title: 'Sản phẩm bán chạy', subtitle: 'Top 1', value: 'Tivi Samsung' },
];

const DashboardRevenue = () => {
  	const scrollOffsetValue = useSharedValue<number>(0);


    return (
      <View style={styles.carousel}>
        	<Carousel
              testID={"xxx"}
              loop={true}
              width={screenWidth * 0.9} 
              height={screenWidth * 0.3}
              snapEnabled={true}
              pagingEnabled={true}
              autoPlayInterval={2000}
              data={cardData}
              mode="parallax"
              modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
              }}
              defaultScrollOffsetValue={scrollOffsetValue}
              
              onScrollStart={() => {
                console.log("Scroll start");
              }}
              onScrollEnd={() => {
                console.log("Scroll end");
              }}
              onConfigurePanGesture={(g: { enabled: (arg0: boolean) => any }) => {
                "worklet";
                g.enabled(false);
              }}
              onSnapToItem={(index: number) => console.log("current index:", index)}
              renderItem={({ item }) => <CardSile {...item}  />}
            />
      </View>
    );
}


const CardSile = ({ title, subtitle, value }: CardSileProps) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
    <Text style={styles.cardValue}>{value}</Text>
  </View>
);


export default DashboardRevenue;

const styles = StyleSheet.create({
carousel: {
  padding: 20,
},
card: {
  backgroundColor: '#fff',
  borderRadius: 16,
  padding: 16,
  width: screenWidth * 0.85, 
  height: screenWidth * 0.3, 
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 10,
  marginHorizontal: 8, 
  borderWidth: 1,
  borderColor: '#eee', 
  borderTopWidth: 3,
  borderTopColor: '#FFD43B', 
  overflow: 'hidden'
},

  cardTitle: { color: '#999', fontSize: 16 },
  cardSubtitle: { fontSize: 16, color: '#aaa' },
  cardValue: { fontSize: 20, fontWeight: 'bold', color: '#333' },
  recentTitle: { marginTop: 20, fontSize: 20, fontWeight: 'bold', color: '#fff' },
})
