import styled from 'styled-components';

export const StyledProfile = styled.div`
  height: auto;
  display: block;
  position: relative;

  .header {
    display: block;
    margin-top: 30px;
    text-align: center;
    font-family: lora;
    font-weight: 600;
    color: #fff;
    font-size: 2rem;
  }
  .content-section {
    margin: 50px 25%;
    min-height: 500px;
    background: rgba(196, 196, 196, 0.2);

    form {
      display: block;
    }
  }
`;
