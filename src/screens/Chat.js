import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../theme.style';
import PillButton from '../components/PillButton';
import ChatIntro from '../components/ChatIntro';

export default function Chat({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>chats</Text>
        <PillButton
          style={styles.button}
          textStyle={styles.buttonText}
          text="start chat"
          iconLeft={
            <Icon
              size={theme.FONT_SIZE_MEDIUM}
              color="white"
              name="message-circle"
            />
          }
        />
      </View>
      <ChatIntro
        name="Martha"
        onPress={() => {
          console.log('chat pressed');
          navigation.navigate('ChatThread', {
            first_name: 'Martha',
            last_name: 'May',
            messages: [
              {
                user: 'Martha May',
                text: 'fabulous bakery hun, definitely check it out!',
              },
              {
                user: 'Martha May',
                text: 'fabulous bakery hun, definitely check it out!',
              },
            ],
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.BACKGROUND_COLOR,
    padding: theme.SPACING_MEDIUM,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
  },
  button: {
    backgroundColor: theme.PRIMARY_COLOR,
    borderWidth: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
});
