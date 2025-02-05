import * as React from 'react';
import {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

import theme from '../theme.style';

export default function HeaderSearch({
  search,
  setSearch,
  placeholder,
  focusOnEntry,
  icon = null,
}) {
  const headerSearchRef = React.useRef();

  useFocusEffect(
    React.useCallback(() => {
      if (focusOnEntry) {
        headerSearchRef.current.focus();
      }
      // clean up function when screen is unfocused
      return () => {};
    }, [focusOnEntry]),
  );

  let [value, setValue] = useState(search);

  return (
    <SafeAreaView style={styles.container}>
      {icon !== null ? <View style={styles.icon}>{icon}</View> : null}
      <TextInput
        style={styles.searchInput}
        onChangeText={(text) => {
          setValue(text);
        }}
        onEndEditing={() => {
          setSearch(value);
        }}
        placeholder={placeholder}
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
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.SPACING_LARGE,
  },
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
