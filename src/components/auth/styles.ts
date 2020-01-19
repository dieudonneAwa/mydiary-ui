import styled from 'styled-components';

export const StyledSignUp = styled.div`
  background-color: #2F2F2F;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  margin: 0; padding: 0;
  position: fixed;
  bottom: 0; top: 0; left: 0; right: 0;
  display: flex;
  align-content: center;
  justify-content: center;

  .errors {
    color: red; font-size: .8rem;
  }
  .form-wrapper {
    background: rgba(196, 196, 196, 0.2);
    width: 40%; height: 500px;
    margin-top: 100px;
    border-radius: 10px;
    border: .45px solid #FFD7D7;

    h3 {
      margin-top: 15px; color: #fff;
      text-align: center;
    }
    p {
      width: 100%; color: #fff;
      font-size: .9rem;
      margin-top: -17px;
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
      input[type="submit"] {
        width: 100%; padding: 10px;
        border-radius: 300px;
        outline: none; font-weight: 600;
        font-size: 1.5rem; margin-top: 50px;
        background-color: #181818;
        border: none; color: #fff;
      }
      input[type="submit"]:hover {
        box-shadow: 0 0 15px rgba(200, 200, 200, 0.5);
      }
    }
  }
`;
