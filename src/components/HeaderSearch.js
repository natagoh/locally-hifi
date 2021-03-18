import * as React from 'react';
import {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

import theme from '../theme.style';

export default function HeaderSearch({search, setSearch}) {
  const headerSearchRef = React.useRef();

  useFocusEffect(
    React.useCallback(() => {
      console.log('search should be focused');
      headerSearchRef.current.focus();
      // clean up function when screen is unfocused
      return () => {};
    }, []),
  );

  let [value, setValue] = useState(search);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => {
          setValue(text);
        }}
        onEndEditing={() => {
          setSearch(value);
          console.log('done search:', search);
          console.log(setSearch);
        }}
        placeholder="search local.ly"
        placeholderTextColor={theme.PRIMARY_COLOR_DIMMED}
        ref={headerSearchRef}
        returnKeyType="search"
        textAlign="left"
        value={value}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    width: '100%',
    fontFamily: 'Lato',
    fontWeight: 'bold',
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.PRIMARY_COLOR,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    marginHorizontal: 24,
    flex: 1,
  },
});
