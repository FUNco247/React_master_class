import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

/** Practice no.5 "Motion Value"
 * Part 1
 * Motion value track the state and velocity of animating values by using "useMoyionValue" hook
 * useMotionValue hook track your motion value BUT! It doesn't occur rerender your component when your element animated
 * It is not a state in React, and It is a kind of protection to improve performance
 * so, If you want check your motion value, you should follow below blocked code example (using useEffect hook)
 *
 * Part 2
 * Now we can get y position from useMotionValue in the example ( const y = useMotionValue(0) -> add style "Y"  )
 * And then, y position need to transform to more usable value. for example, to scale up or down our element by using y value
 * To do that, we can use "useTransform" hook like below code
 * `const scale = useTransform(y, [-300, 0, 300], [1.5, 1, 0.5]);`
 * this code mean  when y value equal to -300 transform it to 1.5 and when y value equal to 300 transform it to 0.5 (linearly changed)
 * 2nd and 3rd argument of useTransform hook must have same length
 */

const MotionValueBox = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

function MotionValue() {
  const y = useMotionValue(0);
  const boxScale = useTransform(y, [-300, 300], [1.5, 0.5]);
  const boxRotate = useTransform(y, [-300, 300], [-360, 360]);
  const boxBackGround = useTransform(
    y,
    [-300, 0, 300],
    ["rgb(171,0,238)", "rgb(255,255,255)", "rgb(25,33,215)"]
  );
  /* useEffect(() => {
    y.onChange(() => console.log(y.get()));
    boxScale.onChange(() => console.log(boxScale.get()));
  }, [y, boxScale]); */
  return (
    <MotionValueBox
      style={{
        y: y,
        scale: boxScale,
        rotateZ: boxRotate,
        backgroundColor: boxBackGround,
      }}
      drag="y"
      dragSnapToOrigin
    >
      Drag y-axis
    </MotionValueBox>
  );
}

export default MotionValue;
