import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
  }

  :root {
    background-color: #FFF3E0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  ::-webkit-scrollbar {
  width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #e2e2e2;
  }
  ::-webkit-scrollbar-thumb:hover {
  background: #c4c4c4;
  }
  body {
   font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
