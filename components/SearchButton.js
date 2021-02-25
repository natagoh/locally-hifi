import * as React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import themeStyle from '../theme.style';

import BaseButton from './BaseButton';

export default function SearchButton({buttonStyle, onPress, text = 'search'}) {
  return (
    <BaseButton
      buttonStyle={[styles.defaultStyle, buttonStyle]}
      text={text}
      textStyle={styles.textStyle}
      icon={<Icon size={16} color={themeStyle.PRIMARY_COLOR} name={'search'} />}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    borderColor: '#175043',
    borderWidth: 2,
    borderRadius: 20,
    padding: 8,
  },
  textStyle: {
    color: '#175043',
    fontSize: 16,
  },
});
