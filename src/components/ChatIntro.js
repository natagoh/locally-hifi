import * as React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import theme from '../theme.style';
import NewBadge from './NewBadge';

export default function ChatIntro({name, timestamp, body, isNew, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={require('./../assets/imgs/watch.jpg')}
        style={styles.img}
      />
      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.timestamp}>just now</Text>
          <NewBadge />
        </View>
        <Text style={styles.body}>
          fabulous bakery hun, definitely check it out!
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    marginVertical: theme.SPACING_MEDIUM,
    padding: theme.SPACING_MEDIUM,
    backgroundColor: theme.POST_BACKGROUND_COLOR,

    borderRadius: 20,
  },
  img: {
    width: 64,
    height: 64,
    marginRight: theme.SPACING_MEDIUM,

    borderColor: 'white',
    borderRadius: 64,
    borderWidth: 2,
  },
  titleContainer: {
    // flex: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexShrink: 1,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
  },
  timestamp: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'normal',
    color: theme.PRIMARY_COLOR_DIMMED,
    marginLeft: theme.SPACING_SMALL,
    // alignSelf: 'flex-end',
  },
  bodyContainer: {
    flexShrink: 1,
  },
  body: {
    fontFamily: 'Lato',
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    // marginVertical: theme.SPACING_SMALL,
    flexShrink: 1,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    borderWidth: 1.5,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
