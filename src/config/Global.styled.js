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
    src: url("./public/assets/fonts/Helvetica.ttf");
  };
  @font-face {
    font-family: 'FiraGO-Regular';
    src: url('./public/assets/fonts/FiraGO-Regular.woff2');
 }

  body {
    background-color: #090707; 
    font-family: "FiraGO-Regular";  
  } 
`;
