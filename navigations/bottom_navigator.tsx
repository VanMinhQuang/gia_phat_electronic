import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/home/screen/home_screen';
import DashboardScreen from '../features/dashboard/screen/dashboard_screen'; // create this if not exists
import ReportScreen from '../features/report/main_report/screen/report_screen'; // create this if not exists
import SettingScreen from '../features/setting/screen/setting_screen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}