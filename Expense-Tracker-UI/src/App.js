import React from 'react';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {useDispatch, useSelector } from 'react-redux';
import {fetchExpenseData } from './store/expenses-actions'
import { useEffect } from 'react';
import Leaderboard from './components/Premium/Leaderboard';
import { fetchPremiumLeaderboardData } from './store/premium-actions';
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const isChanged = useSelector(state => state.expense.isChanged);
  console.log(isLoggedIn);
  useEffect(() => {
    const token = localStorage.getItem('token');

   if(isLoggedIn) {
    setTimeout(() => {
      dispatch(fetchExpenseData(token));
    },1000)
    
   }
   
  },[dispatch,isLoggedIn]);
  useEffect(() => {
    const token = localStorage.getItem('token');

   if(isLoggedIn) {
    setTimeout(() => {
      dispatch(fetchPremiumLeaderboardData(token))
    },1000)
    
   }
   
  },[dispatch,isLoggedIn]);
  


 


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
    <Route path = '/leaderboard'>
      <Leaderboard />
    </Route>
   </Switch>
  );
}

export default App;
