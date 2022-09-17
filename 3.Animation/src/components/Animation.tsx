import styled from "styled-components";
import { motion } from "framer-motion";

/** This is practice framer-motion library
 *  Check out here Framer-motion docs 👉 https://www.framer.com/docs/animate-shared-layout/
 */

// Practice no.1 "animation box"

const AnimationBox = styled(motion.div)`
  // this is how can we use motioned HTML and styled component
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50px;
  margin: 50px;
`;

const variantsPracOne = {
  start: { scale: 0 },
  end: {
    scale: 1,
    rotateZ: 360,
    borderRadius: "10px",
    transition: { type: "spring", delay: 0.5, duration: 1 },
  },
};

/*** Using variants object
 ** declared object "variantsPracOne" is going to be used for AnimationBox component.
 ** the object and component work same as below code
 * <AnimationBox
 * initial={{ scale: 0 }}
 * animate={{ scale: 1, rotateZ: 360, borderRadius: "10px" }}
 * transition={{ type: "spring", delay: 0.5, duration: 1 }}
 * />
 */

function Animation() {
  return (
    <AnimationBox variants={variantsPracOne} initial="start" animate="end" />
  );
}

export default Animation;
