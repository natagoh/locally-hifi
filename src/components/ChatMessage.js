import * as React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

import theme from '../theme.style';

export default function ChatMessage({user, timestamp, body, onPress}) {
  console.log('mes user', user);
  return user === 'you' ? (
    <View style={styles.containerYou} onPress={onPress}>
      <View style={styles.bodyContainerYou}>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.container} onPress={onPress}>
      <Image
        source={require('./../assets/imgs/watch.jpg')}
        style={styles.img}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
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

    borderRadius: 20,
  },
  containerYou: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    marginVertical: theme.SPACING_MEDIUM,

    borderRadius: 20,
  },
  img: {
    width: 48,
    height: 48,
    marginRight: theme.SPACING_MEDIUM,

    borderColor: theme.CARD_BORDER_COLOR,
    borderRadius: 48,
    borderWidth: 1,
  },
  bodyContainer: {
    flexShrink: 1,
    backgroundColor: theme.POST_BACKGROUND_COLOR,
    padding: 12,
    borderRadius: 20,
  },
  bodyContainerYou: {
    flexShrink: 1,
    backgroundColor: theme.SECONDARY_COLOR,
    padding: 12,
    borderRadius: 20,
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
