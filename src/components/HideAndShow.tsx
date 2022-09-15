import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

/** Practice no.7 Hide and Show Animation
 * In normarl react way... changing visibility state occurs directly. so give them animation effect is not easy
 * let your hide-and-show box in the "AnimatePresense" component from "framer-motion"
 * "AnimatePresense" component know that your component visibility presence and animate them
 * give a variants like below code
 */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

const HideAndShowBox = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const SwitvchBtn = styled.button`
  border: none;
  background-color: white;
  margin-top: 5px;
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function HideAndShow() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const onClick = () => setIsShow((prev) => !prev);
  return (
    <Wrapper>
      <AnimatePresence>
        {isShow ? (
          <HideAndShowBox
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
      <SwitvchBtn onClick={onClick}>Switch</SwitvchBtn>
    </Wrapper>
  );
}

export default HideAndShow;
