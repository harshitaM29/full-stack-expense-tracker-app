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
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import Report from './components/Report/Report';
function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
 

  useEffect(() => {
    const token = localStorage.getItem('token');
    const page = 1;
   if(isLoggedIn) {
    setTimeout(() => {
      dispatch(fetchExpenseData(token,page));
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
    <Route path='/forget'>
      <ForgetPassword />
    </Route>
    <Route path='/report'>
     <Report />
    </Route>
   
   </Switch>
  );
}

export default App;
