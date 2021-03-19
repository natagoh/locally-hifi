import * as React from 'react';
import {Pressable, Image, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import CardBody from './CardBody';
import CardButtonGroup from './CardButtonGroup';

const defaultData = {
  address: '984 Beverley Road, Manitou, South Dakota, 2122',
  company: 'Pyramax',
  friendsWhoTrust: 61,
  img: 'http://placehold.it/32x32',
  numRatings: 560,
  phone: '+1 (967) 497-3140',
  rating: 4.8211,
  values: ['cillum', 'fugiat', 'irure', 'quis', 'sint', 'ad', 'qui'],
  _id: '60543e9c5ba8c546d937f2ed',
};

export default function Card({
  data = defaultData,
  onPress,
  isPressed,
  isSaved = false,
}) {
  const cardButtonData = [
    {
      text: 'save card',
      icon: (
        <Icon
          size={theme.FONT_SIZE_MEDIUM}
          color={theme.PRIMARY_COLOR}
          name="pocket"
        />
      ),
      onPress: null,
    },
    {
      text: 'navigate',
      icon: (
        <Icon
          size={theme.FONT_SIZE_MEDIUM}
          color={theme.PRIMARY_COLOR}
          name="navigation"
        />
      ),
      onPress: null,
    },
  ];

  const overlay = (
    <>
      <View style={styles.overlay} />
      <View style={styles.overlayIcon}>
        <Icon size={108} color="white" name="check" />
      </View>
    </>
  );

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <View style={styles.cardInfo}>
          <Image
            source={require('./../assets/imgs/watch.jpg')}
            style={styles.img}
          />
          <CardBody data={data} isSaved={isSaved} />
        </View>
        <CardButtonGroup data={cardButtonData} />
      </View>
      {isPressed ? overlay : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: theme.SPACING_SMALL,
    backgroundColor: theme.CARD_BACKGROUND_COLOR,

    width: '100%',

    borderRadius: 20,
    borderWidth: 1,
    borderColor: theme.CARD_BORDER_COLOR,
  },
  innerContainer: {
    width: '100%',
    padding: theme.SPACING_MEDIUM,
  },
  cardInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  img: {
    width: 128,
    height: 128,

    borderColor: theme.CARD_BORDER_COLOR,
    borderRadius: 10,
    borderWidth: 1,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#888383',
    opacity: 0.75,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  overlayIcon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
