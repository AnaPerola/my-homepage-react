import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    //cores da aplicacao
    --black: #121212;
    --white-text: #e5e7eb;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .body .html {
    height: 100%;
    margin:0; 
  }
`