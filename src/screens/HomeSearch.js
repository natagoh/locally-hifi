import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';

import theme from './../theme.style';
import PillButton from '../components/PillButton';

const updateSearch = (search) => {};

const Stack = createStackNavigator();

export default function HomeSearch({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.buttonContainer}> */}
      <PillButton
        icon={<Icon size={16} color={theme.PRIMARY_COLOR} name={'filter'} />}
        onPress={() => navigation.goBack()}
        style={styles.button}
        text="filter"
      />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.BACKGROUND_COLOR,
    padding: theme.PADDING_MEDIUM,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    alignItems: 'flex-start',
  },
});
