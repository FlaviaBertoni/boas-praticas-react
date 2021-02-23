import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 1vh
  }

  body {
    font: 14px 'Roboto', sans-serif;
    background: #F1F1F1;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
    list-style: none;
  }

  a {
    font: inherit;
    color: inherit;
    text-decoration: inherit;
  }
`;
