import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme } from "./theme";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Can't find root node");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
