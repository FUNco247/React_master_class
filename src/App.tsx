import styled from "styled-components";
import { motion } from "framer-motion";

/** This is practice framer-motion library
 *  Check out here Framer-motion docs 👉 https://www.framer.com/docs/animate-shared-layout/
 */

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

// Practice no.2 Variants

/**
 * motion from "Framer-motion" gives variatns from parents component to child component by default
 * So, you don't have to copy and paste below code
 * variants={variantsPracTwo} initial="start" animate="end"
 * Beacuse of this thing, If you want to give variants info rto child component, you should follow parent's variants obj key name like below
 * const childVarObj = {start :{...}, end:{...}}
 */

const VariantsBox = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 50px;
`;

const VariantsCercle = styled(motion.div)`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  place-self: center;
  /* align-self: center;
  justify-self: center; */
`;

const variantsPracTwo = {
  start: { scale: 0, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

const variantsPracTwoChild = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
};

function App() {
  return (
    <Wrapper>
      <AnimationBox variants={variantsPracOne} initial="start" animate="end" />

      <VariantsBox variants={variantsPracTwo} initial="start" animate="end">
        <VariantsCercle variants={variantsPracTwoChild} />
        <VariantsCercle variants={variantsPracTwoChild} />
        <VariantsCercle variants={variantsPracTwoChild} />
        <VariantsCercle variants={variantsPracTwoChild} />
      </VariantsBox>
    </Wrapper>
  );
}

export default App;
