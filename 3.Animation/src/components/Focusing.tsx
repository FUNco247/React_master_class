import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  padding: 20px;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

const Box2 = styled(Box)`
  transform-origin: bottom left;
`;

const Ball = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const SwitchBtn = styled.button`
  border: none;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);
  border-radius: 15px;
`;

const FocusCover = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FocusBox = styled(motion.div)`
  width: 400px;
  height: 350px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 1);
`;

function Focusing() {
  const [isShow, setIsShow] = useState<boolean>(true);
  const [isFocus, setIsFocus] = useState<string | null>(null);
  return (
    <Wrapper>
      <GridBox>
        <Box
          layoutId="1"
          onClick={() => setIsFocus("1")}
          whileHover={{ scale: 1.2, transformOrigin: "bottom right" }}
        />
        <Box2
          layoutId="2"
          onClick={() => setIsFocus("2")}
          whileHover={{ scale: 1.2, transformOrigin: "bottom left" }}
        >
          {isShow ? (
            <Ball
              style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
              layoutId="ball"
            />
          ) : null}
        </Box2>
        <Box
          layoutId="3"
          onClick={() => setIsFocus("3")}
          style={{ transformOrigin: "top right" }}
          whileHover={{ scale: 1.2, transformOrigin: "top right" }}
        >
          {!isShow ? (
            <Ball
              style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
              layoutId="ball"
            />
          ) : null}
        </Box>
        <Box
          layoutId="4"
          onClick={() => setIsFocus("4")}
          style={{ transformOrigin: "top left" }}
          whileHover={{ scale: 1.2, transformOrigin: "top left" }}
        />
      </GridBox>
      <SwitchBtn
        style={{
          color: !isShow ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
          backgroundColor: isShow
            ? "rgba(0, 0, 0, 1)"
            : "rgba(255, 255, 255, 1)",
        }}
        onClick={() => setIsShow((prev) => !prev)}
      >
        Switch
      </SwitchBtn>
      <AnimatePresence>
        {isFocus && (
          <FocusCover
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFocus(null)}
          >
            <FocusBox layoutId={isFocus} />
          </FocusCover>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default Focusing;
