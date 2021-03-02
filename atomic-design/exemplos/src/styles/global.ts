import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1365px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }


  html, body, #root {
    height: 1vh
  }

  body {
    display: flex;
    flex-direction: column;
    max-width: 1366px;
    margin: 0 auto;
    overflow-y: scroll;
    font-family: 'Roboto', sans-serif;
    background: #F1F1F1;
    color: #333;
    -webkit-font-smoothing: antialiased;
    padding: 0 5rem;
    
    @media(max-width: 1280px) {
      padding: 0 4rem;
    }

    @media(max-width: 767px) {
      padding: 0 1.5rem;
    }
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
