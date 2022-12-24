import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  *,
  *::before,
  *::after { 
    margin:0;
    padding: 0;
    box-sizing: border-box;
  } 

  @font-face { 
    font-family: "Helvetica-Regular"; 
    src: url("assets/fonts/Helvetica.ttf");
  };
  @font-face {
    font-family: 'FiraGO-Regular';
    src: url('assets/fonts/FiraGO-Regular.woff2');
 }

  ul, ol{
    list-style-type: none;
  }

  body {
    background-color: #090707; 
    font-family: "FiraGO-Regular";  
  } 
`;
