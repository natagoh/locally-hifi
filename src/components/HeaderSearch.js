import * as React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import theme from '../theme.style';
import SearchButton from './SearchButton';

const updateSearch = (search) => {};

const Stack = createStackNavigator();

export default function HeaderSearch() {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#EEFBF8',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    marginHorizontal: 24,
    flex: 1,
  },
});
