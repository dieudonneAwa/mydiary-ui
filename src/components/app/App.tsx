// @ts-ignore
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import SignUp from '../auth/signUp/SignUp';
import SignIn from '../auth/signIn/SignIn';
import { StyledApp } from './App.styles';
import Profile from '../profile/Profile';

export const App = (): JSX.Element => {
  return (
    <StyledApp>
      <BrowserRouter forceRefresh>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Profile />
        </Route>
        <Route path="/auth/sign_up">
          <SignUp />
        </Route>
        <Route path="/auth/sign_in">
          <SignIn />
        </Route>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
