import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Home from './../screens/Home';
import Friends from './../screens/Friends';
import Cards from './../screens/Cards';
import Chat from './../screens/Chat';
import Profile from './../screens/Profile';

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
            case 'Friends':
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
            default:
              iconName = 'home';
          }

          return <Icon size={size} color={color} name={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Cards" component={Cards} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
