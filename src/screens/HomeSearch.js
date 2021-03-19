import * as React from 'react';
import {useContext} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';

import AppContext from '../AppContext';
import theme from './../theme.style';
import PillButton from '../components/PillButton';
import Card from './../components/Card';

export default function HomeSearch({navigation}) {
  const {search} = useContext(AppContext);

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
        text="filter 15 results"
        style={styles.filterButton}
        textStyle={styles.filterButtonText}
      />
      {search.length === 0 ? (
        <View style={styles.nullTextContainer}>
          <Text style={styles.nullText}>try searching for something!</Text>
        </View>
      ) : search.toLowerCase() === 'watch' ? (
        <ScrollView style={styles.scrollView}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      ) : (
        <View style={styles.nullTextContainer}>
          <Text style={styles.nullText}>no results :(</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.BACKGROUND_COLOR,
    padding: theme.SPACING_MEDIUM,
  },
  scrollView: {
    width: '100%',
  },
  filterButton: {
    alignSelf: 'flex-start',
  },
  filterButtonText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  nullText: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR_DIMMED,
  },
  nullTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
