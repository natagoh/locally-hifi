import * as React from 'react';
import {useState} from 'react';
import {Image, Text, View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

import theme from '../theme.style';
import PillButton from '../components/PillButton';
import FeedPost from '../components/FeedPost';
import ModalContainer from '../components/ModalContainer';
import NewBadge from '../components/NewBadge';

export default function Feed({navigation}) {
  const [isVisible, setIsVisible] = useState(false);

  // text input value
  let [value, setValue] = useState('');

  const [posts, setPosts] = useState([
    {
      name: 'Jacob',
      timestamp: 'just now',
      body:
        'cool and sustainble clothing stores! only in the area for a few more days',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>feed</Text>
        <PillButton
          style={styles.button}
          textStyle={styles.buttonText}
          text="ask for recs"
          iconLeft={
            <Icon size={theme.FONT_SIZE_MEDIUM} color="white" name="edit-3" />
          }
          onPress={() => setIsVisible(true)}
        />
      </View>
      {posts.map((post, idx) => (
        <FeedPost
          data={post}
          onPress={() => navigation.navigate('FeedShare')}
          key={idx}
        />
      ))}
      {/* modal for asking for recs */}
      <Modal isVisible={isVisible}>
        <ModalContainer>
          {/* todo: refactor profile timestamp component */}
          <View style={styles.heading}>
            <Image
              source={require('./../assets/imgs/watch.jpg')}
              style={styles.img}
            />
            <View>
              <Text style={styles.modalTitle}>You are searching for...</Text>
              <View style={styles.timestampContainer}>
                <Text style={styles.timestamp}>just now</Text>
                <NewBadge />
              </View>
            </View>
          </View>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.modalInput}
            placeholder="what's on your mind?"
            onChangeText={(text) => {
              setValue(text);
            }}
            value={value}
          />
          <View style={styles.buttonContainer}>
            <PillButton
              style={styles.cancelButton}
              textStyle={styles.modalButtonText}
              text="cancel"
              onPress={() => {
                setIsVisible(false);
              }}
            />
            <PillButton
              style={styles.sendButton}
              textStyle={styles.modalButtonText}
              text="post!"
              onPress={() => {
                setPosts([
                  {
                    name: 'You',
                    timestamp: 'just now',
                    body: value,
                  },
                  ...posts,
                ]);
                setIsVisible(false);
              }}
              iconRight={
                <Icon size={theme.FONT_SIZE_MEDIUM} color="white" name="send" />
              }
            />
          </View>
        </ModalContainer>
      </Modal>
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
    backgroundColor: theme.PRIMARY_COLOR_75,
    borderWidth: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: theme.FONT_SIZE_MEDIUM,
  },

  // modal styles
  buttonContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalTitle: {
    alignSelf: 'flex-start',
    fontFamily: 'Lato',
    color: theme.PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
  modalBody: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
    marginVertical: theme.SPACING_MEDIUM,
  },
  modalInput: {
    width: '100%',
    padding: theme.SPACING_SMALL,
    marginVertical: theme.SPACING_MEDIUM,
    backgroundColor: theme.SECONDARY_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    textAlignVertical: 'top',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'normal',
  },
  cancelButton: {
    paddingVertical: theme.SPACING_SMALL,
    marginRight: theme.SPACING_SMALL,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: theme.RED_COLOR,
  },
  sendButton: {
    paddingVertical: theme.SPACING_SMALL,
    borderRadius: 10,
    borderWidth: 0,
    backgroundColor: theme.GREEN_COLOR,
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
  modalTitle: {
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
});
