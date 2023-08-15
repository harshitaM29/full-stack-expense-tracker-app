import React from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {useDispatch } from 'react-redux';
import {fetchExpenseData } from './store/expenses-actions'
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchExpenseData())
  },[dispatch]);

 


  return (
   <Switch>
    <Route path='/' exact>
      <LoginPage />
    </Route>
    <Route path = '/signup'>
      <SignUpPage />
    </Route>
    <Route path = '/home' >
      <HomePage />
    </Route>
   </Switch>
  );
}

export default App;
