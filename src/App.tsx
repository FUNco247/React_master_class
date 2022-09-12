import { createGlobalStyle } from "styled-components";
import ToDoList from "./pages/ToDoList";

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
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;
