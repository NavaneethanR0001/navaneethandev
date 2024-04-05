import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section data-scroll data-scroll-section data-scroll-speed=".1"
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ amount: 0.25 }}
        className={`${styles.padding} w-full relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;