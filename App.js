import * as React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NavBar from './components/NavBar';
import Home from './screens/Home';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <SafeAreaProvider>
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
    // </SafeAreaProvider>
  );
}
