import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.container}>
        {iconLeft ? <View style={styles.iconLeft}>{iconLeft}</View> : null}
        <Text style={[styles.defaultTextStyle, textStyle]}>{text}</Text>
        {iconRight ? <View style={styles.iconRight}>{iconRight}</View> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultTextStyle: {
    fontFamily: 'Lato',
  },
  iconLeft: {
    paddingRight: 4,
  },
  iconRight: {
    paddingLeft: 4,
  },
});
