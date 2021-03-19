import * as React from 'react';
import {useContext, useState} from 'react';
import {Dimensions, Text, StyleSheet, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import data from '../assets/data.json';
import AppContext from '../AppContext';
import theme from '../theme.style';
import PillButton from '../components/PillButton';
import Card from '../components/Card';
import BaseButton from '../components/BaseButton';

export default function FeedShare({navigation}) {
  const {search} = useContext(AppContext);
  const [cardIds, setCardIds] = useState([]);

  console.log('cardIds', cardIds);

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
          search.toLowerCase() === 'watch'
            ? `filter ${data.length} results`
            : 'filter'
        }
        style={styles.filterButton}
        textStyle={styles.filterButtonText}
      />
      {search.length === 0 ? (
        <View style={styles.nullTextContainer}>
          <Text style={styles.nullText}>try searching for something!</Text>
        </View>
      ) : search.toLowerCase() === 'watch' ? (
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
        />
      ) : null}
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
});
