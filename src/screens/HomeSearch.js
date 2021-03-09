import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import PillButton from '../components/PillButton';
import Card from './../components/Card';

export default function HomeSearch({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <PillButton
        iconLeft={<Icon size={16} color={theme.PRIMARY_COLOR} name="filter" />}
        onPress={() => navigation.navigate('Filter')}
        style={styles.button}
        text="filter"
      />
      <Card />
      <Card />
      <Card />
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
    // flex: 1,
  },
  button: {
    alignItems: 'flex-start',
  },
});
