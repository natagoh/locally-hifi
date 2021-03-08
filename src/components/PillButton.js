import * as React from 'react';
import {StyleSheet} from 'react-native';

import theme from '../theme.style';
import BaseButton from './BaseButton';

export default function PillButton({style, icon, onPress, text}) {
  return (
    <BaseButton
      style={[styles.defaultStyle, style]}
      text={text}
      textStyle={styles.textStyle}
      icon={icon}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    backgroundColor: theme.SECONDARY_COLOR,
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
  },
});
