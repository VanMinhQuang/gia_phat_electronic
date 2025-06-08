import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './features/home/screen/home_screen';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}
