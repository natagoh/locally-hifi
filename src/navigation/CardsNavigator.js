import * as React from 'react';
import {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppContext from '../AppContext';
import theme from '../theme.style';
import Cards from '../screens/Cards';
import ChatThread from '../screens/ChatThread';
import HeaderSearch from '../components/HeaderSearch';

const Stack = createStackNavigator();

export default function CardsNavigator() {
  const {search, setSearch} = useContext(AppContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cards"
        component={Cards}
        options={{
          headerTitle: (props) => (
            <HeaderSearch
              {...props}
              search={search}
              setSearch={setSearch}
              placeholder="search cards"
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
        name="ChatThread"
        component={ChatThread}
        options={({route}) => ({
          title: `${route.params.first_name} ${route.params.last_name}`,
          headerTintColor: theme.PRIMARY_COLOR,
          headerStyle: {
            backgroundColor: theme.SECONDARY_COLOR,
            elevation: 0, // for Android
            shadowOffset: {
              width: 0,
              height: 0, // for iOS
            },
          },
        })}
      />
    </Stack.Navigator>
  );
}
