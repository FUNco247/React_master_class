import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

/** Practice no.8 Layout
 * If you want to make animation like catch-ball thing, check below code
 * toggle-switch makes once componet show and oposite hide.
 * In that situation, you can animate ball moving.
 * you should share same "layoutId" to each element
 */

const Wrapper = styled.div`
  display: flex;
  margin: 50px;
  align-items: center;
`;

const CatchBallBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  margin: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ball = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: 1000;
`;

const Btn = styled.button`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 15px;
`;

function CatchBall() {
  const [isShow, setIsShow] = useState<boolean>(true);
  const onClick = () => setIsShow((prev) => !prev);
  return (
    <Wrapper>
      <CatchBallBox>
        {isShow ? (
          <Ball
            layoutId="ball"
            style={{ backgroundColor: "rgba(141, 71, 223, 1)", scale: 1 }}
          />
        ) : null}
      </CatchBallBox>
      <Btn onClick={onClick}>move</Btn>
      <CatchBallBox>
        {!isShow ? (
          <Ball
            layoutId="ball"
            style={{ backgroundColor: "rgba(71,223,217,1)", scale: 1.5 }}
          />
        ) : null}
      </CatchBallBox>
    </Wrapper>
  );
}

export default CatchBall;
