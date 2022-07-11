import Router from "./Router";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

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
function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
