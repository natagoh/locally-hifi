import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import FilterValue from './FilterValue';
import CardTier from './CardTier';

// if isSaved === true, card should display rewards progress
export default function CardBody({data, isSaved}) {
  let {company, values, friendsWhoTrust, rating, numRatings} = data;

  const ratings = (
    <View style={styles.section}>
      <Text style={styles.ratingText}>{rating.toFixed(2)}</Text>
      {[...Array(5)].map((_, idx) => (
        <Icon
          size={theme.FONT_SIZE_MEDIUM}
          color={theme.PRIMARY_COLOR}
          name="star"
          key={`card-rating-star-${idx}`}
        />
      ))}
      <Text style={styles.numRatingsText}>({numRatings})</Text>
    </View>
  );
  const trust = (
    <View style={styles.section}>
      <Icon
        size={theme.FONT_SIZE_MEDIUM}
        color={theme.PRIMARY_COLOR}
        name="user-check"
      />
      <Text style={styles.trustText}>{friendsWhoTrust} friends who trust</Text>
    </View>
  );

  const lastVisit = (
    <View style={styles.section}>
      <Text>last visit: 3 days ago</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{company}</Text>
      {isSaved ? (
        <>
          {lastVisit}
          <CardTier />
        </>
      ) : (
        <>
          {ratings}
          {trust}
        </>
      )}
      <View style={styles.values}>
        {values.slice(0, 5).map((val, idx) => (
          <FilterValue isDisplay={true} text={val} key={idx} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 0,
    flexDirection: 'column',
    marginLeft: theme.SPACING_MEDIUM,
    flexShrink: 1,
  },
  title: {
    fontFamily: 'Lato',
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
  section: {
    // flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ratingText: {
    paddingRight: 4,
  },
  numRatingsText: {
    paddingLeft: 4,
  },
  trustText: {
    paddingLeft: 4,
  },
  values: {
    marginTop: 6,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
