import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './../screens/Home';
import HomeSearch from './../screens/HomeSearch';
import HeaderSearch from './HeaderSearch';

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
      <Stack.Screen
        name="Search"
        component={HomeSearch}
        options={{headerTitle: (props) => <HeaderSearch {...props} />}}
      />
      <Stack.Screen name="Filter" component={Home} />
    </Stack.Navigator>
  );
}
