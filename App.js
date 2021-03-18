import * as React from 'react';
import {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import AppContext from './src/AppContext';
import NavBar from './src/components/NavBar';

export default function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    businessValues: [],
    businessTypes: [],
    productValues: [],
    distance: 0,
  });

  return (
    <AppContext.Provider value={{search, setSearch, filters, setFilters}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <NavBar />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContext.Provider>
  );
}
