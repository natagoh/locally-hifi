import * as React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../theme.style';
import BaseButton from './BaseButton';

export default function OutlineButton({
  style,
  textStyle,
  iconLeft,
  iconRight,
  onPress,
  text,
}) {
  return (
    <BaseButton
      style={[styles.defaultStyle, style]}
      text={text}
      textStyle={[styles.textStyle, textStyle]}
      iconLeft={iconLeft}
      iconRight={iconRight}
      onPress={onPress}
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
