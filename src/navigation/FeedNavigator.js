import * as React from 'react';
import {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppContext from '../AppContext';
import theme from '../theme.style';
import Feed from '../screens/Feed';
import HomeSearch from '../screens/HomeSearch';
import HomeFilter from '../screens/HomeFilter';
import HeaderSearch from '../components/HeaderSearch';

const Stack = createStackNavigator();

export default function FeedNavigator() {
  const {search, setSearch} = useContext(AppContext);

  console.log('context search:', search);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          headerTitle: (props) => (
            <HeaderSearch
              {...props}
              search={search}
              setSearch={setSearch}
              placeholder="search friends"
              focusOnEntry={false}
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
        name="Search"
        component={HomeSearch}
        options={{
          headerTitle: (props) => (
            <HeaderSearch {...props} search={search} setSearch={setSearch} />
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
        component={HomeFilter}
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
