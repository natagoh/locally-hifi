import * as React from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import CardButton from './CardButton';

export default function Card() {
  return (
    <View style={styles.container}>
      <View />
      <View>
        <Text>I am a card!</Text>
      </View>
      <View style={styles.buttonGroup}>
        <CardButton
          text="save card"
          icon={<Icon size={16} color={theme.PRIMARY_COLOR} name="pocket" />}
        />
        <CardButton
          text="navigate"
          icon={
            <Icon size={16} color={theme.PRIMARY_COLOR} name="navigation" />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: theme.PADDING_MEDIUM,
    backgroundColor: theme.CARD_BACKGROUND_COLOR,

    width: '100%',
    height: Dimensions.get('window').width / 1.5,

    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: theme.CARD_BORDER_COLOR,
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
});
