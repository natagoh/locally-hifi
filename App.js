import * as React from 'react';
import {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import AppContext from './src/AppContext';
import NavBar from './src/navigation/NavBar';

export default function App() {
  const [filters, setFilters] = useState({
    businessValues: [],
    businessTypes: [],
    productValues: [],
    distance: 0,
  });

  const [homeSearch, setHomeSearch] = useState('');
  const [feedShareSearch, setFeedShareSearch] = useState('');

  return (
    <AppContext.Provider
      value={{
        filters,
        setFilters,
        homeSearch,
        setHomeSearch,
        feedShareSearch,
        setFeedShareSearch,
      }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <NavBar />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContext.Provider>
  );
}
