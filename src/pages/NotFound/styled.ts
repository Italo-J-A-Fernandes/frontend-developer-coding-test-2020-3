import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    a {
      outline: 0;
      text-decoration: none;
      color: #756480;
      border: 2px solid #756480;
      padding: 5px;
      transition: 0.2s;

      &:hover {
        background-color: #000;
        color: #fff;
        border: 2px solid #000;
      }
    }
  }
`;
