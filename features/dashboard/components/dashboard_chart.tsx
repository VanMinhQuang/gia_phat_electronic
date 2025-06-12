import React, { useState } from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { Dimensions, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../../constant/colors/Color';
import { Button } from 'react-native-paper';
import { useDashboardChartHook } from '../../../hooks/dashboard/dashboard_chart_hook';
import {Fold} from 'react-native-animated-spinkit'

const screenWidth = Dimensions.get('window').width;

const DashboardChart = () => {
  const { chartData, loading, yearOffset, changeYear } = useDashboardChartHook();

  const getFilteredData = () => {
    return chartData.map((item: any) => ({
      value: item.value,
      label: item.label || item.lable || item.month || '',
    }));
  };

  return (
    <View style={styles.container}>
      <View>
        {loading ? (
          <View style={{ height: hp('40%'), justifyContent: 'center', alignItems: 'center' }}>
            <Fold size={48} color={Colors.primary} />
          </View>
        ) : (
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
        )}
      </View>
      <View style={styles.buttonRow}>
        <Button mode="contained" onPress={() => changeYear(yearOffset - 1)} style={styles.filterButton}>
          {'< Năm trước'}
        </Button>
        <Text style={styles.weekOffsetText}>Năm: {yearOffset}</Text>
        <Button mode="contained" onPress={() => changeYear(yearOffset + 1)} style={styles.filterButton}>
          {'Năm sau >'}
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
    marginBottom: 10
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