import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import theme from './../theme.style';

export default function FilterHeading({text}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.PADDING_MEDIUM,
  },
  text: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
    marginRight: 8,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.PRIMARY_COLOR,
  },
});
