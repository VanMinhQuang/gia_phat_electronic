import RootNavigator from './navigations/root_navigator';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

export default function App() {
  useEffect(() => {
  debugger;
}, []);
  enableScreens(); 
    return (
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>

  );
}
