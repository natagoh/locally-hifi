import * as React from 'react';
import {useContext, useState} from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';

import data from '../assets/data.json';
import AppContext from '../AppContext';
import theme from '../theme.style';
import PillButton from '../components/PillButton';
import Card from '../components/Card';
import BaseButton from '../components/BaseButton';
import ModalContainer from '../components/ModalContainer';

export default function FeedShare({navigation}) {
  const {feedShareSearch} = useContext(AppContext);
  const [cardIds, setCardIds] = useState([]);

  // modal triggers
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  return (
    <View style={styles.container}>
      <PillButton
        iconLeft={
          <Icon
            size={theme.FONT_SIZE_MEDIUM}
            color={theme.PRIMARY_COLOR}
            name="filter"
          />
        }
        onPress={() => navigation.navigate('Filter')}
        text={
          feedShareSearch.toLowerCase() === 'watch'
            ? `filter ${data.length} results`
            : 'filter'
        }
        style={styles.filterButton}
        textStyle={styles.filterButtonText}
      />
      {feedShareSearch.length === 0 ? (
        <View style={styles.nullTextContainer}>
          <Text style={styles.nullText}>try searching for something!</Text>
        </View>
      ) : feedShareSearch.toLowerCase() === 'watch' ? (
        <>
          <Text style={styles.hint}>tap the cards you want to share</Text>
          <ScrollView style={styles.scrollView}>
            {data.map((val, idx) => (
              <Card
                data={val}
                key={idx}
                isPressed={cardIds.includes(val._id)}
                onPress={() => {
                  console.log('pressed', cardIds);
                  if (cardIds.includes(val._id)) {
                    setCardIds(cardIds.filter((e) => e !== val._id));
                  } else {
                    setCardIds([...cardIds, val._id]);
                  }
                }}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <View style={styles.nullTextContainer}>
          <Text style={styles.nullText}>no results :(</Text>
        </View>
      )}
      {cardIds.length > 0 ? (
        <BaseButton
          text={`share (${cardIds.length})`}
          style={styles.shareButton}
          textStyle={styles.shareButtonText}
          iconLeft={
            <Icon size={theme.FONT_SIZE_LARGE} color="white" name="share-2" />
          }
          onPress={() => setIsVisible(true)}
        />
      ) : null}
      {/* modal for adding message */}
      <Modal isVisible={isVisible}>
        <ModalContainer>
          <Text style={styles.modalTitle}>add a message</Text>
          <TextInput style={styles.modalInput} placeholder="optional message" />
          <View style={styles.buttonContainer}>
            <PillButton
              style={styles.cancelButton}
              textStyle={styles.modalButtonText}
              text="cancel"
              onPress={() => setIsVisible(false)}
            />
            <PillButton
              style={styles.sendButton}
              textStyle={styles.modalButtonText}
              text="send"
              onPress={() => {
                setIsVisible(false);
                setIsComplete(true);
              }}
            />
          </View>
        </ModalContainer>
      </Modal>
      {/* modal after message sent */}
      <Modal isVisible={isComplete}>
        <ModalContainer>
          <Text style={styles.modalBody}>Your cards have been sent!</Text>
          <View style={styles.buttonContainer}>
            <PillButton
              style={styles.cancelButton}
              textStyle={styles.modalButtonText}
              text="return to feed"
              onPress={() => {
                setIsComplete(false);
                navigation.navigate('Feed');
              }}
            />
            <PillButton
              style={styles.sendButton}
              textStyle={styles.modalButtonText}
              text="go to chat"
              onPress={() => {
                setIsComplete(false);
                navigation.navigate('Chat');
              }}
            />
          </View>
        </ModalContainer>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.BACKGROUND_COLOR,
    padding: theme.SPACING_MEDIUM,
  },
  scrollView: {
    width: '100%',
  },
  filterButton: {
    alignSelf: 'flex-start',
  },
  filterButtonText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
  },
  hint: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
    marginVertical: theme.SPACING_SMALL,
  },
  nullText: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR_DIMMED,
  },
  nullTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  shareButton: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    backgroundColor: theme.PRIMARY_COLOR,
    padding: theme.SPACING_MEDIUM,
  },
  shareButtonText: {
    color: 'white',
    fontSize: theme.FONT_SIZE_LARGE,
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
});
