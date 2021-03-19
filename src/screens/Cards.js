import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

import theme from '../theme.style';
import data from '../assets/data.json';
import Card from './../components/Card';

export default function Cards() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>cards</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {data.map((val, idx) => (
          <Card data={val} isSaved={true} key={idx} />
        ))}
      </ScrollView>
    </View>
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
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
  },
  scrollView: {
    width: '100%',
  },
});
