import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';

export default function BaseButton({
  style,
  onPress,
  textStyle,
  text,
  iconLeft,
  iconRight,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.defaultStyle, style]}>
      {iconLeft}
      <Text style={[styles.defaultTextStyle, textStyle]}>{text}</Text>
      {iconRight}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  defaultTextStyle: {
    fontFamily: 'Lato',
  },
});
