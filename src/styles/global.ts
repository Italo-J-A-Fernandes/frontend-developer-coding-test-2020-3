import { createGlobalStyle } from 'styled-components';

import '../assets/fonts/fonts.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Helvetica-Nue, sans-serif;

    .ReactModalPortal{
      .ReactModal__Overlay{
        z-index: 1;
        background-color: rgb(0, 0, 0, 0.75);
      }
    }
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    outline: none;
  }

  #app {
    max-width: 1440px;
    margin: 0 auto;
  }
`;
