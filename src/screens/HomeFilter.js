import * as React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

import theme from './../theme.style';
import FilterValue from './../components/FilterValue';

export default function HomeFilter() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>filter!</Text>
      <FilterValue text="i am a filter" />
      <FilterValue text="i am a filter" isActive={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: theme.BACKGROUND_COLOR,
    padding: theme.PADDING_MEDIUM,
  },
  buttonContainer: {
    flexDirection: 'row',
    // width: '100%',
    flex: 1,
  },
  button: {
    alignItems: 'flex-start',
  },
});
