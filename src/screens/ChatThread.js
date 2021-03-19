import * as React from 'react';
import {useEffect, useState} from 'react';
import {Text, TextInput, View, ScrollView, StyleSheet} from 'react-native';

import theme from '../theme.style';
import Card from '../components/Card';
import ChatMessage from '../components/ChatMessage';

export default function ChatThread({route}) {
  const {first_name, last_name, messages} = route.params;
  const [chatMessages, setChatMessages] = useState(messages);
  const [text, setText] = useState('');
  const sentCardText = (
    <Text style={styles.cardSentText}>{first_name} sent a card!</Text>
  );
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContentContainer}>
        {sentCardText}
        <Card />
        {chatMessages.map(({user, text}, idx) => (
          <ChatMessage user={user} body={text} key={idx} />
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userInput}
          placeholder="send a message"
          returnKeyType="send"
          onPress={() => setText('')}
          onChangeText={(e) => {
            setText(e);
          }}
          value={text}
          onSubmitEditing={(e) => {
            setChatMessages([
              ...chatMessages,
              {user: 'you', text: e.nativeEvent.text},
            ]);
            console.log('text submit', chatMessages);
          }}
        />
      </View>
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
  messagesContainer: {
    width: '100%',
    height: '100%',
  },
  messagesContentContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardSentText: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
    marginVertical: theme.SPACING_SMALL,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: theme.SPACING_SMALL,
    backgroundColor: theme.BACKGROUND_COLOR,
  },
  userInput: {
    borderRadius: 50,
    paddingVertical: theme.SPACING_SMALL,
    paddingHorizontal: theme.SPACING_MEDIUM,
    backgroundColor: theme.SECONDARY_COLOR,
  },
});
