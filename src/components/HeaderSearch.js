import * as React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import theme from '../theme.style';

const Stack = createStackNavigator();

export default function HeaderSearch() {
  const [value, setValue] = React.useState('');
  const headerSearchRef = React.useRef();

  useFocusEffect(
    React.useCallback(() => {
      console.log('search should be focused');
      headerSearchRef.current.focus();
      // clean up function when screen is unfocused
      return () => {};
    }, []),
  );

  return (
    <SafeAreaView>
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => setValue(text)}
        placeholder="search local.ly"
        placeholderTextColor={theme.PRIMARY_COLOR_DIMMED}
        ref={headerSearchRef}
        returnKeyType="search"
        textAlign="left"
        value={value}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
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
