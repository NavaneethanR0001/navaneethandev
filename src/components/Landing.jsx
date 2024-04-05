import React from 'react'
import{motion} from "framer-motion";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import {
    logoim
  } from "../assets";


const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className='w-full -mt-4 overflow-hidden h-screen flex pt-1'>
        <div>
        <div className='mt-40 px-20'>
            <motion.div initial={{x:-200, opacity:0}} whileInView={{ x: 0, opacity:1 }}
  transition={{ ease:"easeIn", duration: 1}} className='masker'>
                <h1 className=' text-slate-950 pt-[2vw] -mb-[1vw]  text-7xl leading-[0.89] tracking-tighter font-medium '>
                  Hi, I'm    
                </h1>
            </motion.div>
            <div className='masker '>
                <div className=' w-fit flex items-center'>
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}}className='w-[9vw] rounded-md h-[4vw] relative top-[1.5vw] bg-[#22e32f]' ></motion.div>
                <h1 className=' pt-[2vw] -mb-[1vw] text-7xl  text-slate-950 tracking-tighter h-full leading-[0.89] font-medium '>
                     Navaneethan 
                </h1>
            </div>
            </div>
            <motion.div initial={{x:-200, opacity:0}} whileInView={{ x: 0, opacity:1 }}
  transition={{ ease:"easeIn", duration: 1}} className='masker'>
                <h1 className=' pt-[2vw] -mb-[1vw]  text-slate-950 text-7xl leading-[0.75] tracking-tighter font-medium '>
                    M E R N     Stack  Developer 
                </h1>
            </motion.div>
            <p className="my-6 text-slate-600 text-xl mt-10">
      I am a Skilled and passionate MERN stack developer with 3 years of experience in creating visually appealing and user frinedly websites.   </p>
        </div>
        </div>
        <motion.div initial={{x:400, opacity:0}} whileInView={{ x: 0, scale:0.8,opacity:1 }}
  transition={{ ease:"easeIn", duration: 1}} whileHover={{scale:0.9, opacity:1}} >

            <img src={logoim}
            alt="logo"/>
        </motion.div>

    </div>
  )
}

export default Landing