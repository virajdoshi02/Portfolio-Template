import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { shaq, bwmap, worldmap } from '../assets';

const Hero = () => {
  return (
    <>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
          <div>
        <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[66vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={shaq}
            alt="viraj"
          />
        </div>
        <div
          className={`absolute inset-0 sm:top-[150px] top-[100px] 
          lg:top-[100px] xl:top-[150px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm <font color = "#020202" >Viraj Doshi</font>
            </h1>
            <p className={`${styles.heroSubText} mt-2`}>
            <font color="#444444">
              An aspiring Game Designer and Developer.</font>
            </p>
            <p className={`${styles.heroSubText} mt-2`}>
              <font color="#666666">
              I am currently a Computer Science student at the University of <br/>Pennsylvania.</font>
            </p>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
