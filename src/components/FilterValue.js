import * as React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../theme.style';
import OutlineButton from './OutlineButton';
import PillButton from './PillButton';

export default function FilterValue({onPress, text, isActive = false}) {
  return isActive ? (
    <PillButton
      style={[styles.defaultStyle]}
      text={text}
      textStyle={[styles.textStyle, styles.pillText]}
      iconRight={<Icon size={16} color={theme.PRIMARY_COLOR} name="x" />}
      onPress={onPress}
    />
  ) : (
    <OutlineButton
      style={[styles.defaultStyle, styles.outlineButton]}
      text={text}
      textStyle={styles.textStyle}
      iconRight={
        <Icon size={16} color={theme.PRIMARY_COLOR_DIMMED} name="plus" />
      }
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    borderWidth: 1.5,
    borderRadius: 25,
    padding: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  outlineButton: {
    borderColor: theme.PRIMARY_COLOR_DIMMED,
  },
  textStyle: {
    color: theme.PRIMARY_COLOR_DIMMED,
    fontSize: theme.FONT_SIZE_SMALL,
  },
  pillText: {
    color: theme.PRIMARY_COLOR,
  },
});
