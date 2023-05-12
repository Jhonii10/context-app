import React, { useState } from 'react';
import './App.css';
import { UserContext } from './context/userContext';
import AppRouter from './router/AppRouter';

function App() {

  const [user, setuser] = useState(null);

  const state = {user, setuser}

  return (
    <div className='app'>
      <UserContext.Provider value={state}>
      <AppRouter/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
