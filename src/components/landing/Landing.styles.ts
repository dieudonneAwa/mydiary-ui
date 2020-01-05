import styled from 'styled-components';
// @ts-ignore
import image from './diary-pic.jpg';

export const LandingComp = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: url(${image}) no-repeat fixed center;
  background-size: cover;
  
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: rgba(005, 005, 005, .7);
    
    .logo {
      position: absolute;
      width: 206px;
      height: 54px;
      left: 30px;
      top: 20px;
      font-family: Lucida Calligraphy;
      font-style: italic;
      font-weight: normal;
      font-size: 40px;
      line-height: 54px;

      color: #FFD7D7;
    }
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
    button {
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

    button:hover {
      border: none;
      cursor: pointer;
    }
  }
`;
