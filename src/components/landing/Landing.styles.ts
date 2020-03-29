// @ts-ignore
import styled from 'styled-components';
// @ts-ignore
import image from './diary-pic.jpg';

export const LandingComp = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${image}) no-repeat fixed center;
  background-size: cover;
  
  .container {
    width: 100vw;
    height: 100vh;
    background-color: rgba(005, 005, 005, .7);

    .welcome {
      display: flex;
      align-content: center;
      justify-content: center;

      .quote {
      width: 600px;
      height: 200px;
      margin-top: 25vh;
      font-family: Lora;
      font-style: italic;
      font-weight: normal;
      font-size: 40px;
      line-height: 50px;
      text-align: center;
      color: #fff;
    }
    .start {
      position: absolute;
      top: 55vh;
      width: 240px;
      height: 80px;
      font-size: 35px;
      background: #31393C;
      border: 1px solid #FFD7D7;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      color: #fff;
    }

    .start:hover {
      border: none;
      cursor: pointer;
    }
    }
    
    .auth-btn {
      background: transparent;
      font-size: 22px;
      color: #fff;
      padding: 7px;
      border: 1px solid #FFD7D7;
      border-radius: 10px;
    }
    .signUp-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: rgba(0, 0, 0, 0.7);
    }
    .signUp-btn:hover {
      background: #31393C;
    }
    .signIn-btn {
      position: absolute;
      top: 20px;
      right: 125px;
    }
  }
`;
