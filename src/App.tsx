/** This is practice framer-motion library
 *  Check out here Framer-motion docs 👉 https://www.framer.com/docs/animate-shared-layout/
 */

import styled from "styled-components";
import Animation from "./components/Animation";
import Dragger from "./components/Dragger";
import Gesture from "./components/Gesture";
import Variants from "./components/Variants";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Animation />
      <Variants />
      <Gesture />
      <Dragger />
    </Wrapper>
  );
}

export default App;
