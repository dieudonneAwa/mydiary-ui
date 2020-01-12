// @ts-ignore
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing/Landing';
import SignUp from '../auth/signUp/SignUp';
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
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
