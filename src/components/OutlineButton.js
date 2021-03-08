import * as React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../theme.style';
import BaseButton from './BaseButton';

export default function OutlineButton({style, onPress, text = 'search'}) {
  return (
    <BaseButton
      style={[styles.defaultStyle, style]}
      text={text}
      textStyle={styles.textStyle}
      icon={<Icon size={16} color={theme.PRIMARY_COLOR} name={'search'} />}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
  },
  textStyle: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
