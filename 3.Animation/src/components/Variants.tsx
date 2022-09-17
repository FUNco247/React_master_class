import styled from "styled-components";
import { motion } from "framer-motion";

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

function Variants() {
  return (
    <VariantsBox variants={variantsPracTwo} initial="start" animate="end">
      <VariantsCercle variants={variantsPracTwoChild} />
      <VariantsCercle variants={variantsPracTwoChild} />
      <VariantsCercle variants={variantsPracTwoChild} />
      <VariantsCercle variants={variantsPracTwoChild} />
    </VariantsBox>
  );
}

export default Variants;
