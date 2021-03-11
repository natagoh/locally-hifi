import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import OutlineButton from '../components/OutlineButton';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <OutlineButton
          style={styles.button}
          text="search"
          iconLeft={
            <Icon
              size={theme.FONT_SIZE_LARGE}
              color={theme.PRIMARY_COLOR}
              name="search"
            />
          }
          onPress={() => navigation.navigate('Search')}
          textStyle={styles.buttonText}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#EEFBF8',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    marginHorizontal: theme.SPACING_LARGE,
    flex: 1,
  },
  buttonText: {
    fontSize: theme.FONT_SIZE_LARGE,
    fontWeight: 'bold',
  },
});
