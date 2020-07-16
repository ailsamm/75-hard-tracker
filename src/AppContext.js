import React from 'react';

const AppContext = React.createContext({
  users: [],
  userLogs: []
});

export default AppContext;