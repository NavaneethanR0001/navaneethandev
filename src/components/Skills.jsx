import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, servicess, servicesss} from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { lap1 } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-[100px] green-pink-gradienttt p-[1px] rounded-full shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[#ffffff] rounded-full py-5 px-5 min-h-[30px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  return (
    <div  className='w-full h-screen overflow-hidden bg-[#bfff58] justify-between   -mt-4 px-32 rounded-tl-3xl flex rounded-tr-3xl'>
      <motion.div  className='py-7 'variants={textVariant()}>
       
        <h2 className={styles.sectionHeadText}>Skills</h2>
        <motion.div initial={{x:400, opacity:0}} whileInView={{ x: 0, scale:1,opacity:1 }}
  transition={{ ease:"easeIn", duration: 1}} whileHover={{scale:0.9, opacity:1}} >
        <img
          src={lap1}
          alt='web-development'
          className='w-80 h-96  object-contain mt-16'
        />
</motion.div>
      </motion.div>

     
<div className="flex ">
      <div className='mt-10 flex flex-col gap-9'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='mt-10 flex flex-col gap-9'>
        {servicess.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='mt-10 flex flex-col gap-9'>
        {servicesss.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "about");