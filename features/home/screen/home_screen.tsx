import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import DashboardScreen from '../../dashboard/screen/dashboard_screen';
import ReportScreen from '../../report/main_report/screen/report_screen';
import SettingScreen from '../../setting/screen/setting_screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

      if (route.name === 'Dashboard') iconName = 'home';
      else if (route.name === 'Report') iconName = 'document-text';
      else  iconName = 'settings';

      return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Report" component={ReportScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}