/** This is practice framer-motion library
 *  Check out here Framer-motion docs 👉 https://www.framer.com/docs/animate-shared-layout/
 */

import styled from "styled-components";
import Animation from "./components/Animation";
import Dragger from "./components/Dragger";
import Gesture from "./components/Gesture";
import HideAndShow from "./components/HideAndShow";
import MotionValue from "./components/MotionValue";
import SvgAnimation from "./components/SvgAnimation";
import Variants from "./components/Variants";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Row>
        <Animation />
        <Variants />
        <Gesture />
        <Dragger />
        <MotionValue />
        <SvgAnimation />
      </Row>
      <Row>
        <HideAndShow />
      </Row>
    </Wrapper>
  );
}

export default App;
