import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Slider from '@react-native-community/slider';

import theme from './../theme.style';
import FilterValue from './../components/FilterValue';
import FilterHeading from './../components/FilterHeading';

const FILTERS = ['asian-owned', 'black-owned', 'female-owned'];

const BUSINESS_TYPE = ['fashion', 'food', 'entertainment', 'health'];

const PRODUCT_FILTERS = [
  'second-hand',
  'vintage',
  'direct to consumer',
  'eco-friendly',
];

export default function HomeFilter() {
  return (
    <SafeAreaView style={styles.container}>
      <FilterHeading text="business values" />
      <View style={styles.valuesContainer}>
        {FILTERS.map((filter, index) => (
          <FilterValue text={filter} key={index} />
        ))}
      </View>
      <FilterHeading text="business type" />
      <View style={styles.valuesContainer}>
        {BUSINESS_TYPE.map((filter, index) => (
          <FilterValue text={filter} key={index} />
        ))}
      </View>
      <FilterHeading text="product values" />
      <View style={styles.valuesContainer}>
        {PRODUCT_FILTERS.map((filter, index) => (
          <FilterValue text={filter} key={index} />
        ))}
      </View>
      <FilterHeading text="distance" />
      <Slider
        maximumValue={100}
        minimumValue={0}
        step={1}
        value={67}
        style={styles.slider}
      />
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
    padding: theme.SPACING_MEDIUM,
  },
  valuesContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  slider: {
    width: '100%',
  },
});
