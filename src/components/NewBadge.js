import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import '../theme.style';
import theme from '../theme.style.js';

export default function NewBadge() {
  return <Text style={styles.new}>new</Text>;
}

const styles = StyleSheet.create({
  new: {
    backgroundColor: theme.NEW_BADGE_COLOR,
    color: 'white',
    fontFamily: 'Lato',
    borderRadius: 20,
    paddingVertical: 2,
    paddingHorizontal: 7,
    marginLeft: theme.SPACING_SMALL,
  },
});
