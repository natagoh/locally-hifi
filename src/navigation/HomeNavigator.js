import * as React from 'react';
import {useState, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppContext from '../AppContext';
import theme from '../theme.style';
import Home from '../screens/Home';
import HomeSearch from '../screens/HomeSearch';
import Filter from '../screens/Filter';
import HeaderSearch from '../components/HeaderSearch';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  const {homeSearch, setHomeSearch} = useContext(AppContext);

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
        options={{
          headerTitle: (props) => (
            <HeaderSearch
              {...props}
              search={homeSearch}
              setSearch={setHomeSearch}
              placeholder="search local.ly"
              focusOnEntry={homeSearch.length === 0}
            />
          ),
          headerTintColor: theme.PRIMARY_COLOR,
          headerStyle: {
            backgroundColor: theme.SECONDARY_COLOR,
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
        }}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{
          headerTintColor: theme.PRIMARY_COLOR,
          headerStyle: {
            backgroundColor: theme.SECONDARY_COLOR,
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
        }}
      />
    </Stack.Navigator>
  );
}
