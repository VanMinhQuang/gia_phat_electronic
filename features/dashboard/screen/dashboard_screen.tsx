import React from 'react';

import DashboardOrder from '../components/dashboard_recent_order';
import { ScrollView } from 'react-native'; 
import DashboardRevenue from '../components/dashboard_revenue';
import DashboardChart from '../components/dashboard_chart';
import { Card } from 'react-native-paper';



export default function DashboardScreen() {
  return (
    <ScrollView>
      
        <DashboardChart/>
        <DashboardRevenue/>
      
      
      <DashboardOrder/>
    </ScrollView>
    
  );
}

