import * as React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from './../theme.style';
import PillButton from '../components/PillButton';
import Card from './../components/Card';

export default function HomeSearch({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <PillButton
        iconLeft={
          <Icon
            size={theme.FONT_SIZE_MEDIUM}
            color={theme.PRIMARY_COLOR}
            name="filter"
          />
        }
        onPress={() => navigation.navigate('Filter')}
        text="filter"
        style={styles.filterButton}
        textStyle={styles.filterButtonText}
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
    padding: theme.SPACING_MEDIUM,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  filterButton: {
    alignItems: 'flex-start',
  },
  filterButtonText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
