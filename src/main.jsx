import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./config/Global.styled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
