import * as React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';

import theme from './../theme.style';
import PillButton from './PillButton';

export default function CardBody({text, icon, onPress}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Text>23 friends who trust</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: theme.SPACING_MEDIUM,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
});
