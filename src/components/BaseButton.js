import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

export default function BaseButton({style, onPress, textStyle, text, icon}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.defaultStyle, style]}>
      {icon}
      <Text style={textStyle}> {text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
});
