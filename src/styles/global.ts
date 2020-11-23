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
        background-color: rgb(0, 0, 0, 0.75) !important;
      }

      @media only screen and (max-width: 504px) {
        .ReactModal__Content{
          top: 0 !important;
          bottom: 0 !important;
          left: 0 !important;
          right: 0 !important;
          padding: 0 !important;
        }
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
