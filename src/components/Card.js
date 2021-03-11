import * as React from 'react';
import {Dimensions, Text, Image, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import CardBody from './CardBody';
import CardButton from './CardButton';

export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.cardInfo}>
        <Image
          source={require('./../assets/imgs/watch.jpg')}
          style={styles.img}
        />
        <CardBody />
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: theme.SPACING_MEDIUM,
    padding: theme.SPACING_MEDIUM,
    backgroundColor: theme.CARD_BACKGROUND_COLOR,

    width: '100%',
    height: Dimensions.get('window').width / 1.5,

    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.CARD_BORDER_COLOR,
  },
  cardInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  img: {
    width: 128,
    height: 128,

    borderColor: theme.CARD_BORDER_COLOR,
    borderRadius: 10,
    borderWidth: 1,
  },
});
