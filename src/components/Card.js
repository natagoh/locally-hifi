import * as React from 'react';
import {Pressable, Image, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import CardBody from './CardBody';
import CardButtonGroup from './CardButtonGroup';

export default function Card({onPress}) {
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
          <CardBody />
        </View>
        <CardButtonGroup data={cardButtonData} />
      </View>
      {overlay}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: theme.SPACING_MEDIUM,
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
    // backgroundColor: '#888383',
    // opacity: 0.75,
    width: '100%',
    height: '100%',
    // borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
