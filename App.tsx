import RootNavigator from './navigations/root_navigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { Colors } from './constant/colors/Color';

export default function App() {
  enableScreens(); // Enable native screens for better performance
    return (
      <SafeAreaProvider style={{ flex: 1 }}>
        <SafeAreaView style={{flex: 1, backgroundColor:Colors.white}} edges={['bottom']}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaView>

      </SafeAreaProvider>

  );
}
