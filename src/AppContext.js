import React from 'react';

const AppContext = React.createContext({
  search: '',
  setSearch: () => {},
  filters: [],
  setFilters: () => {},
});

export default AppContext;
