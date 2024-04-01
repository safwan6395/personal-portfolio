import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { computer } from "../assets";

const Hero = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Safwan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A front-end enthusiast with a passion for creating captivating web
            experiences using React and Angular.
          </p>
        </div>
      </div>

      {width > 768 ? (
        <ComputersCanvas />
      ) : (
        <div className='absolute top-[50%] w-full flex justify-center'>
          <img src={computer} alt='' className='w-80' />
        </div>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[44px] rounded-3xl border-4 border-secondary flex justify-center items-start py-2'>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: "infinite",
                repeatType: "loop",
              }}
              className='w-1.5 h-1.5 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
