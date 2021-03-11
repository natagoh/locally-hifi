import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function BaseButton({
  style,
  onPress,
  textStyle,
  text,
  iconLeft = null,
  iconRight = null,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={styles.container}>
        {iconLeft}
        <Text
          style={[
            styles.defaultTextStyle,
            textStyle,
            iconLeft ? styles.iconLeft : null,
            iconRight ? styles.iconRight : null,
          ]}>
          {text}
        </Text>
        {iconRight}
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
    paddingLeft: 4,
  },
  iconRight: {
    paddingRight: 4,
  },
});
