import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact Details</h3>
          <label className="flex flex-col">
          <span className="text-taupe">viraj.doshi02@gmail.com</span>
          <br/>
          <div>
          <a href="https://linkedin.com/in/viraj-doshi-2b96a125b" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="viraj-doshi-2b96a125b" height="30" width="40" /></a>
          <br/>
          <a href="https://instagram.com/virajpdoshi" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="virajpdoshi" height="30" width="40" /></a>
          </div>
          </label>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
