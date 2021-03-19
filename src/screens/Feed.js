import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import theme from '../theme.style';
import PillButton from '../components/PillButton';
import FeedPost from '../components/FeedPost';

export default function Feed({navigation}) {
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
        />
      </View>
      <FeedPost onPress={() => navigation.navigate('FeedShare')} />
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
