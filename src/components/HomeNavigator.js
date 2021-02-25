import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './../screens/Home';
import HomeSearch from './../screens/HomeSearch';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Search" component={HomeSearch} />
      <Stack.Screen name="Filter" component={Home} />
    </Stack.Navigator>
  );
}
