import React from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
   <Switch>
    <Route path='/' exact>
      <LoginPage />
    </Route>
    <Route path = '/signup'>
      <SignUpPage />
    </Route>
   </Switch>
  );
}

export default App;
