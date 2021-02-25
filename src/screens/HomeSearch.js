import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Feather';
import {useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import theme from './../theme.style';
import SearchButton from './../components/SearchButton';

const updateSearch = (search) => {};

const Stack = createStackNavigator();

export default function HomeSearch({navigation}) {
  useFocusEffect(
    React.useCallback(() => {
      console.log('search should be focused');
      // clean up function when screen is unfocuses
      return () => {};
    }),
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <SearchButton buttonStyle={styles.button} />
      </View> */}
      <Text>Home Search!</Text>
      <View style={styles.buttonContainer}>
        <SearchButton
          buttonStyle={styles.button}
          onPress={() => navigation.goBack()}
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
