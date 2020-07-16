import React from 'react';

const AppContext = React.createContext({
  users: [],
  userLogs: [],
  onAddNewLog: () => {}
});

export default AppContext;