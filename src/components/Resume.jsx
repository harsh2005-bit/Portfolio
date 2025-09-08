import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import resumePdf from "../assets/HarshKumarResume.pdf";

const Resume = () => {
  const resumePath = resumePdf;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Download</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Need a copy of my latest resume? Click the button below to download it.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className='mt-10'
      >
        <a
          href={resumePath}
          download
          className='inline-flex items-center gap-2 bg-tertiary text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#2b2d3a] transition-colors duration-200'
        >
          <span className='text-[16px] font-medium'>Download Resume</span>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");


