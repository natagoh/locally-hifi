import * as React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../theme.style';
import HomeNavigator from './HomeNavigator';
import FeedNavigator from './FeedNavigator';
import Feed from '../screens/Feed';
import Cards from './../screens/Cards';
import Chat from './../screens/Chat';
import Profile from './../screens/Profile';

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? '';
  const hideTabBarRoutes = ['Search', 'Filter'];
  return !(hideTabBarRoutes.indexOf(routeName) >= 0);
};

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;
            case 'Feed':
              iconName = focused ? 'users' : 'users';
              break;
            case 'Cards':
              iconName = focused ? 'credit-card' : 'credit-card';
              break;
            case 'Chat':
              iconName = focused ? 'message-circle' : 'message-circle';
              break;
            case 'Profile':
              iconName = focused ? 'user' : 'user';
              break;
          }

          return <Icon size={size} color={color} name={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.PRIMARY_COLOR,
        inactiveTintColor: theme.PRIMARY_COLOR_DIMMED,
        keyboardHidesTabBar: true,
        tabStyle: {
          backgroundColor: theme.SECONDARY_COLOR,
          paddingTop: 5,
        },
        // remove default top gray border
        style: {
          borderTopColor: theme.SECONDARY_COLOR,
          elevation: 0, // for Android
          shadowOffset: {
            width: 0,
            height: 0, // for iOS
          },
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
