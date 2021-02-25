import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import NavBar from './src/components/NavBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
