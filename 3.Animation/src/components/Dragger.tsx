import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

/** Practice no.4 dragging
 * drag element with "Frammer-motion"  is super easy
 * just write "drag" in component declare code
 * and can add animate by using "whileDrag"
 * If "dragSnapToOrigin" props be added, element will comeback to origin
 **Tip : If you want to add color animayion, you have to write color like rgb(...). If you write word like "tomato", can't be animated.
 *
 * Part 2 ( add constraint )
 * We can limit area the dragable element can move (make a fence for movimg element)
 * 1) "drag=x" mean that the element can move only x-axis and equal "drag=y"
 * 2) also add constraint by using props "dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}"
 * 3) make reference by using "useRef" hook and use it as a constraint. Check the final code below
 */

const LimitBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const DraggerBox = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 255, 255);
  border-radius: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8px;
`;

function Dragger() {
  const dragLimit = useRef<HTMLDivElement>(null);
  return (
    <LimitBox ref={dragLimit}>
      <DraggerBox
        drag
        dragConstraints={dragLimit}
        dragSnapToOrigin
        whileDrag={{
          backgroundColor: "rgba(0,9,211,1)",
          color: "rgba(255, 255, 255)",
          transition: { duration: 0.2 },
        }}
      >
        Drag Me
      </DraggerBox>
    </LimitBox>
  );
}

export default Dragger;
