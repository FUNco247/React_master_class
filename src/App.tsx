import Router from "./Router";
import { Reset } from "styled-reset";
import { createGlobalStyle, DefaultTheme } from "styled-components";
import styled, { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Jua', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
  *{
    box-sizing: border-box;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
`;

const ThemeToggleBtn = styled.button`
  font-size: 32px;
  text-align: center;
  border: solid 3px;
  border-color: ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.textColor};
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin: 20px 0px 0px 20px;
`;
function App() {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);
  const toggleTheme = () => {
    if (theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <ThemeToggleBtn onClick={toggleTheme}>
        {" "}
        {theme === darkTheme ? "🌞" : "🌙"}{" "}
      </ThemeToggleBtn>
      <Router />
    </ThemeProvider>
  );
}

export default App;
