import React from 'react';

import DashboardOrder from '../components/dashboard_recent_order';
import { ScrollView } from 'react-native'; 
import DashboardRevenue from '../components/dashboard_revenue';
import DashboardChart from '../components/dashboard_chart';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../constant/colors/Color';


export default function DashboardScreen() {
  return (
      <ScrollView contentContainerStyle={styles.screen}> 
          <DashboardRevenue/>
          <DashboardChart/>
          <DashboardOrder/>
      </ScrollView>


    
  );
}


const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.white
  }
})

