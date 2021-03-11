import * as React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';

import theme from './../theme.style';
import PillButton from './PillButton';

export default function CardButton({text, icon, onPress, style}) {
  return (
    <PillButton
      iconLeft={icon}
      onPress={onPress}
      style={[styles.button, style]}
      text={text}
      textStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.CARD_BUTTON_COLOR,
    borderRadius: 5,
    borderWidth: 0,
    padding: 8,
  },
  text: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'normal',
    color: theme.PRIMARY_COLOR,
  },
});
