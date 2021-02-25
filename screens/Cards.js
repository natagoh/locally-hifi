import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';

const updateSearch = (search) => {};

export default function Cards() {
  const search = 'test';
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        icon={{type: 'material-community', color: '#86939e', name: 'share'}}
        clearIcon={{
          type: 'material-community',
          color: '#86939e',
          name: 'share',
        }}
        round={true}
        value={search}
      />

      <Button title="Solid Button" />

      <Button title="Outline button" type="outline" />

      <Button title="Clear button" type="clear" />
      <Input placeholder="BASIC INPUT" />
      <Text>Home!</Text>
    </SafeAreaView>
  );
}
