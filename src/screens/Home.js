import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import OutlineButton from '../components/OutlineButton';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>local.ly</Text>
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
  title: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: 80,
    marginBottom: 64,
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
