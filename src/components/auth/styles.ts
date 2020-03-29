import styled, { keyframes } from 'styled-components';

export const AuthLayout = styled.div`
    background-color: #2F2F2F;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    margin: 0; padding: 0;
    display: block;
    .errors {
      color: red; font-size: .8rem;
    }
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  border: .2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid white;
  border-radius: 50%;
  width: ${(props: { width: string }): string => props.width};
  height: ${(props: { width: string }): string => props.width};
  position: absolute;
  top: 40%;
  animation: ${spin} 0.6s linear infinite;
  align-self: center;
`;


export const StyledSignUp = styled.div`
  .form-wrapper {
    background: rgba(196, 196, 196, 0.2);
    width: 600px;
    height: auto;
    margin-top: 140px;
    border-radius: 10px;
    border: .45px solid #FFD7D7;
    margin: 140px 30%;

    h3 {
      margin-top: 15px; color: #fff;
      text-align: center;
    }
    p {
      width: 100%; color: #fff;
      font-size: .9rem;
      margin-top: -15px;
      padding-bottom: 25px;
      margin-left: 90px;
      a {
        font-weight: 600;
        color: skyblue;
      }
    }
    form {
      width: 70%;
      margin: 30px auto;
      
      .form-input {
        width: 100%;
        margin-top: 10px;
      }
      input[type="text"], input[type="email"], input[type="password"] {
        width: 100%; height: 50px;
        border-radius: 300px;
        font-size: 1.5rem;
        outline: none; border: none; padding: 10px;
        background-color: rgba(196, 196, 196, 0.8);
      }
      button[type="submit"] {
        width: 100%; height: 52px; padding: 10px;
        border-radius: 300px;
        outline: none; font-weight: 600;
        font-size: 1.5rem; margin-top: 50px;
        background-color: #181818;
        border: none; color: #fff;
        position: relative;
        .loader {
          display: block;
          margin: auto;
        }
      }
      button[type="submit"]:hover {
        box-shadow: 0 0 15px rgba(200, 200, 200, 0.5);
      }
    }
  }
`;
