import * as React from 'react';
import {StyleSheet} from 'react-native';

import theme from '../theme.style';
import BaseButton from './BaseButton';

export default function OutlineButton({
  style,
  textStyle,
  iconLeft,
  iconRight,
  onPress,
  text,
  disabled,
}) {
  return (
    <BaseButton
      style={[styles.defaultStyle, style]}
      text={text}
      textStyle={[styles.textStyle, textStyle]}
      iconLeft={iconLeft}
      iconRight={iconRight}
      onPress={onPress}
      disabled={disabled}
    />
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    borderRadius: 25,
    padding: 10,
  },
  textStyle: {
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
