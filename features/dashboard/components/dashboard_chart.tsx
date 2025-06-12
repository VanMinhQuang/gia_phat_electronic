import React, { useState } from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../../constant/colors/Color';
import { Button } from 'react-native-paper';



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

const DashboardChart = () => {
  const [weekOffset, setWeekOffset] = useState(0);
  const getFilteredData = () => {
    return chartData;
  };

  return (
    <View style={styles.container}>
      <View>
        <BarChart
          data={getFilteredData()}
          width={screenWidth - wp("5%")}
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
          frontColor={Colors.primary}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button mode="contained" onPress={() => setWeekOffset(weekOffset - 1)} style={styles.filterButton}>
          {'< Tuần trước'}
        </Button>
        <Text style={styles.weekOffsetText}>Năm: {2025 + weekOffset}</Text>
        <Button mode="contained" onPress={() => setWeekOffset(weekOffset + 1)} style={styles.filterButton}>
          {'Tuần sau >'}
        </Button>
      </View>
    </View>
  );
};

export default DashboardChart;


const styles = StyleSheet.create({
 container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
    flexDirection: 'column'
  },
  card:{
    padding: 10,
  },
  topLable:{
    color: Colors.textSecondary,
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 8,
  },
  weekOffsetText: {
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    minWidth: 80,
    textAlign: 'center',
  },
});