import * as React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../theme.style';
import OutlineButton from './OutlineButton';
import NewBadge from './NewBadge';

const defaultData = {
  name: 'Jacob',
  timestamp: 'just now',
  body:
    'cool and sustainble clothing stores! only in the area for a few more days',
};

export default function FeedPost({data = defaultData, onPress}) {
  const {name, timestamp, body} = data;
  const yourPost = name.toLowerCase() === 'you';

  const button = (
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
  );

  // buttons if you are the author of the post
  const editorButtons = (
    <View style={styles.buttonGroup}>
      <OutlineButton
        style={[styles.button, styles.deleteButton]}
        textStyle={[styles.buttonText, styles.deleteButtonText]}
        text="delete"
        // TODO: onPress={onPress}
        iconRight={
          <Icon
            size={theme.FONT_SIZE_MEDIUM}
            color={theme.RED_COLOR}
            name="trash-2"
          />
        }
      />
      <OutlineButton
        style={[styles.button, styles.editButton]}
        textStyle={styles.buttonText}
        text="edit"
        // TODO: onPress={onPress}
        iconRight={
          <Icon
            size={theme.FONT_SIZE_MEDIUM}
            color={theme.PRIMARY_COLOR}
            name="edit-2"
          />
        }
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Image
          source={require('./../assets/imgs/watch.jpg')}
          style={styles.img}
        />
        <View>
          <Text style={styles.title}>
            {name} {yourPost ? 'are' : 'is'} searching for...
          </Text>
          <View style={styles.timestampContainer}>
            <Text style={styles.timestamp}>{timestamp}</Text>
            <NewBadge />
          </View>
        </View>
      </View>
      <Text style={styles.body}>{body}</Text>
      {yourPost ? editorButtons : button}
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
    alignSelf: 'flex-start',
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

  // button gorup for when you are the post author
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  editButton: {
    borderColor: theme.GREEN_COLOR,
  },
  deleteButton: {
    borderColor: theme.RED_COLOR,
    marginRight: theme.SPACING_SMALL,
  },
  deleteButtonText: {
    color: theme.RED_COLOR,
  },
});
