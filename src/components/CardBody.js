import * as React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';

import theme from './../theme.style';
import PillButton from './PillButton';

export default function CardBody({text, icon, onPress}) {
  return (
    <View>
      <Text>Title</Text>
      <Text>23 friends who trust</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.CARD_BUTTON_COLOR,
    borderRadius: 5,
    borderWidth: 0,
  },
  text: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'normal',
    color: theme.PRIMARY_COLOR,
    marginRight: 8,
  },
});
