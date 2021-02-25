import * as React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import theme from './../theme.style';
import BaseButton from './../components/BaseButton';
import SearchButton from './../components/SearchButton';

const updateSearch = (search) => {};

const Stack = createStackNavigator();

export default function Home() {
  const search = 'test';
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EEFBF8',
      }}>
      {/* <Button
        buttonStyle={{
          borderRadius: 50,
          borderWidth: 2,
          borderColor: theme.PRIMARY_COLOR,
          width: '100%',
          // flex: 1,
        }}
        // containerStyle={{flexDirection: 'row', paddingHorizontal: 24}}
        icon={<Icon name="search" size={15} color={theme.PRIMARY_COLOR} />}
        title="search"
        titleStyle={{color: '#175043'}}
        type="outline"
      /> */}

      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}>
        <SearchButton
          buttonStyle={{
            marginHorizontal: 24,
            flex: 1,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
