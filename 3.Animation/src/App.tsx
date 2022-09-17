/** This is practice framer-motion library
 *  Check out here Framer-motion docs 👉 https://www.framer.com/docs/animate-shared-layout/
 */

import styled from "styled-components";
import Animation from "./components/Animation";
import CatchBall from "./components/CatchBall";
import Dragger from "./components/Dragger";
import Focusing from "./components/Focusing";
import Gesture from "./components/Gesture";
import HideAndShow from "./components/HideAndShow";
import MotionValue from "./components/MotionValue";
import Slider from "./components/Slider";
import SvgAnimation from "./components/SvgAnimation";
import Variants from "./components/Variants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
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
        <CatchBall />
        <Slider />
      </Row>
      <Row>
        <Focusing />
      </Row>
    </Wrapper>
  );
}

export default App;
