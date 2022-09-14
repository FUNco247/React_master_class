import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`

body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
  background:linear-gradient(135deg,#e09,#d0e);
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
}
`;

const root = document.getElementById("root");
if (!root) {
  throw new Error("Can't find root node");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
