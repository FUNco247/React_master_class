import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px;
  position: relative;
`;

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  justify-self: center;
`;

const BoxWrap = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
  justify-self: center;
`;

const GhostBox = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  justify-self: center;
`;

const Btn = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  font-size: 30px;
`;

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const variants = {
  enter: (isGoNext: boolean) => ({
    x: isGoNext ? 200 : -200,
    opacity: 0,
    scale: 0,
  }),
  stay: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (isGoNext: boolean) => ({
    x: isGoNext ? -200 : 200,
    opacity: 0,
    scale: 0,
  }),
};

function Slider() {
  const [showing, setShowing] = useState<number>(0);
  const [isGoNext, setIsGoNext] = useState<boolean>(true);

  const showNext = () => {
    setIsGoNext(true);
    setShowing((prev) => {
      const maxIndex = data.length - 1;
      if (prev === maxIndex) {
        return prev;
      } else {
        const next = prev + 1;
        return next;
      }
    });
  };

  const showPrev = () => {
    setIsGoNext(false);
    setShowing((prev) => {
      const minIndex = 0;
      if (prev === minIndex) {
        return prev;
      } else {
        const before = prev - 1;
        return before;
      }
    });
  };

  return (
    <Wrapper>
      <Btn onClick={showPrev}>&larr;</Btn>
      <AnimatePresence custom={isGoNext}>
        <GhostBox>
          {data.map((item, index) =>
            index === showing ? (
              <Box
                custom={isGoNext}
                variants={variants}
                initial="enter"
                animate="stay"
                exit="exit"
                key={index}
              >
                {item}
              </Box>
            ) : null
          )}
        </GhostBox>
      </AnimatePresence>
      <BoxWrap />
      <Btn onClick={showNext}>&rarr;</Btn>
    </Wrapper>
  );
}
export default Slider;
