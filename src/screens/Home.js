import * as React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';

import theme from './../theme.style';
import OutlineButton from '../components/OutlineButton';

export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('./../assets/imgs/logo.png')}
        style={styles.logo}
      />
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
  logo: {
    width: 128,
    height: 128,
  },
  title: {
    fontFamily: 'Lato',
    fontWeight: 'bold',
    color: theme.PRIMARY_COLOR,
    fontSize: 64,
    marginBottom: 64,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    // todo: fix super hacky way of aligning search bar in the center with explicit margins
    marginBottom: 200,
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
