// @ts-ignore
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import SignUp from '../auth/signUp/SignUp';
import SignIn from '../auth/signIn/SignIn';
import { StyledApp } from './App.styles';

export const App = (): JSX.Element => {
  return (
    <StyledApp>
      <BrowserRouter forceRefresh>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/auth/sign_up">
          // @ts-ignore
          <SignUp />
        </Route>
        <Route path="/auth/sign_in">
          // @ts-ignore
          <SignIn />
        </Route>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
