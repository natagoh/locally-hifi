import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import theme from './../theme.style';
import OutlineButton from '../components/OutlineButton';

const updateSearch = (search) => {};

const Stack = createStackNavigator();

export default function Home({navigation}) {
  const search = 'test';
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <OutlineButton
          style={styles.button}
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EEFBF8',
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
