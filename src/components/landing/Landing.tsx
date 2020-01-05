// @ts-ignore
import React from 'react';
import { LandingComp } from './Landing.styles';

const Landing = () => {
  return (
    <LandingComp>
      <div className="container">
        <div className="logo">MyDiary</div>
        <div className="quote">
          “I can shake off everything as I write, my sorrows disappear, my courage is reborn.”
        </div>
        <button>Start Writing</button>
      </div>
    </LandingComp>
  )
};

export default Landing;
