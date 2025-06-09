import React from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../../../constant/colors/Color';
import { Card } from 'react-native-paper';



const screenWidth = Dimensions.get('window').width;

const chartData = [
  { value: 4, label: 'JUN' },
  { value: 6, label: 'JUL' },
  { value: 6.5, label: 'AUG' },
  { value: 20, label: 'SEP' },
  { value: 8, label: 'OCT' },
  { value: 9, label: 'NOV' },
  { value: 10, label: 'DEC' },
];

const DashboardChart = () => (
  <Card style={[styles.card, { width: screenWidth - wp("5%") }]}>

      <View>
        <BarChart
          data={chartData}
          width={screenWidth - wp("15%")}
          height={hp('33%')}
          barWidth={25}
          barBorderRadius={8}
          minHeight={3}
  
          yAxisThickness={0}
          xAxisLabelTextStyle={{
            fontSize: 14,
            fontWeight: 'bold',
            color: Colors.primary,
          }}
          xAxisColor="#eee"
          isAnimated
          animationDuration={500}
          yAxisTextStyle={{ color: 'grey' }}
          showValuesAsTopLabel
          topLabelTextStyle={styles.topLable}
          yAxisLabelSuffix=''
          yAxisLabelContainerStyle={{ paddingVertical: 2 }}
          disablePress
          hideRules
          frontColor="#A18CD1" // Start color

        />
      </View>
 
 

    
  </Card>
);

export default DashboardChart;


const styles = StyleSheet.create({
  card:{
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  topLable:{
    color: Colors.textSecondary,
    fontSize: 14,
  }
});