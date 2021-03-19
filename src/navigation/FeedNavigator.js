import * as React from 'react';
import {useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppContext from '../AppContext';
import theme from '../theme.style';
import Feed from '../screens/Feed';
import FeedShare from '../screens/FeedShare';
import Filter from '../screens/Filter';
import HeaderSearch from '../components/HeaderSearch';

const Stack = createStackNavigator();

export default function FeedNavigator() {
  const [search, setSearch] = useState('');
  const {feedShareSearch, setFeedShareSearch} = useContext(AppContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        initialParams={{search}}
        options={{
          headerTitle: (props) => (
            <HeaderSearch
              {...props}
              search={search}
              setSearch={setSearch}
              placeholder="search feed"
              focusOnEntry={false}
              icon={
                <Icon
                  size={theme.FONT_SIZE_LARGE}
                  color={theme.PRIMARY_COLOR}
                  name="search"
                />
              }
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
        name="FeedShare"
        component={FeedShare}
        initialParams={{search: feedShareSearch}}
        options={{
          headerTitle: (props) => (
            <HeaderSearch
              {...props}
              search={feedShareSearch}
              setSearch={setFeedShareSearch}
              placeholder="find a place to share"
              focusOnEntry={true}
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
