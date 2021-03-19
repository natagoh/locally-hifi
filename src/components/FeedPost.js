import * as React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../theme.style';
import OutlineButton from './OutlineButton';
import NewBadge from './NewBadge';

export default function FeedPost({name, timestamp, body, isNew, onPress}) {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image
          source={require('./../assets/imgs/watch.jpg')}
          style={styles.img}
        />
        <View>
          <Text style={styles.title}>Jacob is searching for...</Text>
          <View style={styles.timestampContainer}>
            <Text style={styles.timestamp}>just now</Text>
            <NewBadge />
          </View>
        </View>
      </View>
      <Text style={styles.body}>
        cool and sustainble clothing stores! only in the area for a few more
        days
      </Text>
      <OutlineButton
        style={styles.button}
        textStyle={styles.buttonText}
        text="share a place"
        onPress={onPress}
        iconRight={
          <Icon
            size={theme.FONT_SIZE_MEDIUM}
            color={theme.PRIMARY_COLOR}
            name="send"
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginVertical: theme.SPACING_MEDIUM,
    padding: theme.SPACING_MEDIUM,
    backgroundColor: theme.POST_BACKGROUND_COLOR,

    width: '100%',

    borderRadius: 20,
  },
  heading: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  img: {
    width: 64,
    height: 64,
    marginRight: theme.SPACING_MEDIUM,

    borderColor: 'white',
    borderRadius: 64,
    borderWidth: 2,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
  },
  timestampContainer: {
    flexDirection: 'row',
  },
  timestamp: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: 'normal',
    color: theme.PRIMARY_COLOR_DIMMED,
  },
  body: {
    fontFamily: 'Lato',
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    marginVertical: theme.SPACING_MEDIUM,
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
