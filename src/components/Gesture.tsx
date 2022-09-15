import styled from "styled-components";
import { motion } from "framer-motion";

/** Practice no.3  "gesture"
 * in this practice learn how component listen event
 * "while" props is the key
 */

const GestureBox = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255);
  border-radius: 50px;
  margin: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const gestureVariants = {
  hover: { scale: 1.2, rotateZ: 360, borderRadius: "15px" },
  click: {
    borderRadius: "60px",
    backgroundColor: "rgba(245, 115, 42)",
    color: "rgb(255, 255, 255)",
    fontSize: "20px",
  },
};

function Gesture() {
  return (
    <GestureBox variants={gestureVariants} whileHover="hover" whileTap="click">
      Hover
      <br />
      click
    </GestureBox>
  );
}

export default Gesture;
