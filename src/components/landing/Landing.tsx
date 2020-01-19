// @ts-ignore
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { LandingComp } from './Landing.styles';

const Landing = () => {
  return (
    <LandingComp>
      <div className="container">
        <BrowserRouter forceRefresh>
          <Link to="/">
            <div className="logo">MyDiary</div>
          </Link>
          <Link to="/auth/sign_up">
            <button className="auth-btn signUp-btn">Sign Up</button>
          </Link>
          <Link to="/auth/sign_in">
            <button className="auth-btn signIn-btn">Sign In</button>
          </Link>
        </BrowserRouter>
        <div className="quote">
          “I can shake off everything as I write, my sorrows disappear, my courage is reborn.”
        </div>
        <button className="start">Start Writing</button>
      </div>
    </LandingComp>
  )
};

export default Landing;
