import * as React from 'react';
import {useContext} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Slider from '@react-native-community/slider';

import AppContext from '../AppContext';
import theme from '../theme.style';
import FilterValue from '../components/FilterValue';
import FilterHeading from '../components/FilterHeading';

const BUSINESS_FILTERS = ['asian-owned', 'black-owned', 'female-owned'];

const BUSINESS_TYPES = ['fashion', 'food', 'entertainment', 'health'];

const PRODUCT_FILTERS = [
  'second-hand',
  'vintage',
  'direct to consumer',
  'eco-friendly',
];

export default function Filter() {
  const {filters, setFilters} = useContext(AppContext);
  let {businessValues, businessTypes, productValues, distance} = filters;

  const addFilter = (filterType, val) => {
    return () => {
      let vals = filters[filterType];
      vals.push(val);
      setFilters({
        ...filters,
        [filterType]: vals,
      });
    };
  };

  const removeFilter = (filterType, val) => {
    return () =>
      setFilters({
        ...filters,
        [filterType]: filters[filterType].filter((e) => e !== val),
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FilterHeading text="business values" />
      <View style={styles.valuesContainer}>
        {BUSINESS_FILTERS.map((filter, index) => {
          let isFilterActive = businessValues.includes(filter);
          return (
            <FilterValue
              text={filter}
              key={index}
              isActive={isFilterActive}
              onPress={
                isFilterActive
                  ? removeFilter('businessValues', filter)
                  : addFilter('businessValues', filter)
              }
            />
          );
        })}
      </View>
      <FilterHeading text="business type" />
      <View style={styles.valuesContainer}>
        {BUSINESS_TYPES.map((filter, index) => {
          let isFilterActive = businessTypes.includes(filter);
          return (
            <FilterValue
              text={filter}
              key={index}
              isActive={isFilterActive}
              onPress={
                isFilterActive
                  ? removeFilter('businessTypes', filter)
                  : addFilter('businessTypes', filter)
              }
            />
          );
        })}
      </View>
      <FilterHeading text="product values" />
      <View style={styles.valuesContainer}>
        {PRODUCT_FILTERS.map((filter, index) => {
          let isFilterActive = productValues.includes(filter);
          return (
            <FilterValue
              text={filter}
              key={index}
              isActive={isFilterActive}
              onPress={
                isFilterActive
                  ? removeFilter('productValues', filter)
                  : addFilter('productValues', filter)
              }
            />
          );
        })}
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
