import styled, { keyframes } from "styled-components";

const Parent = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Rotation = keyframes`
0% {
  transform: rotate(odeg);
  border-radius: 0px
}
50%{
  border-radius: 150px;
}
100% {
  transform: rotate(360deg)
}`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 300px;
  height: 300px;
  animation: ${Rotation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    &:hover {
      color: black;
    }
  }
`;

function App() {
  return (
    <div>
      <Parent>
        <Box bgColor="tomato">
          <h1>Loading...</h1>
        </Box>
      </Parent>
    </div>
  );
}

export default App;
