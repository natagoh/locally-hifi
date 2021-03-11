import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import CardButton from './CardButton';

// data is an array of {text, icon, onPress}
export default function CardButtonGroup({data}) {
  return (
    <View style={styles.buttonGroup}>
      {data.map(({text, icon, onPress}, idx) => (
        <CardButton
          text={text}
          icon={icon}
          onPress={onPress}
          style={idx !== data.length - 1 ? styles.buttonSpacing : null}
          key={`card-button-group-${idx}`}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  buttonSpacing: {
    marginRight: 6,
  },
});
