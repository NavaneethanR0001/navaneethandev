import React from 'react'
import { motion } from "framer-motion";
import { points,pointss } from "../constants";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Experinece = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>

        <div className=' w-[80vw] h-[80vh] ml-40 mt-16 bg-[#016e08]'>
        <motion.div  className='py-7 px-6 gap-4 flex items-center'variants={textVariant()}>
        <h2 className=" text-[#38f245] font-black tracking-wider  md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]">Work</h2>
        <h2 className= "text-[#38f245] font-black md:text-[50px] tracking-wider sm:text-[50px] xs:text-[40px] text-[30px]">Experience</h2>
      </motion.div>

      <div
            className="flex flex-col  justify-center pb-48"
          >
           
            {/* EXPERIENCE LIST */}
          
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <motion.div
              initial={{ x: "-300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}}
              delay={(1* 0.5, 0.75)}
              className="bg-lime-400 p-3 mx-14 font-semibold text-slate-950 rounded-b-lg rounded-s-lg">
                    M E R N  Stack Developer
                    </motion.div>

                  {/* JOB DESC */}
                  <motion.div
              initial={{ x: "-300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}} 
              delay={(2* 0.8, 0.75)} 
              className="p-3 mx-14 text-sm -mt-4 italic">

<ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>    ))}
      </ul>

                    </motion.div>

                  {/* JOB DATE */}
                  <motion.div
              initial={{ x: "-300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}}
              delay={(3* 0.8, 0.75)}
              ease= {"easeOut"}
               className="p-2 text-red-400 mx-14 text-sm font-semibold">
                    2023 - Present
                    </motion.div>

                  {/* JOB COMPANY */}
              
               
                  <motion.div
              initial={{ x: "300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}} 
              delay={(3* 0.5, 0.75)}
              ease= {"easeOut"}
              className="p-1 rounded mx-16 bg-lime-400  text-slate-950 text-sm font-semibold w-fit">
                    TCS
                  </motion.div>
                  </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <motion.div
              initial={{ x: "-300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}}
              delay={(5* 0.5, 0.75)}
              ease= {"easeOut"}
              className="w-1 h-full bg-lime-200 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-emerald-200 bg-red-500 -left-2"></div>
                    </motion.div>

                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div
              className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <motion.div
              initial={{ x: "300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}} 
              ease= {"easeOut"}
              className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-lime-200 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4  ring-emerald-200 bg-red-500 -left-2"></div>
                  </div>
                  </motion.div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <motion.div
              initial={{ x: "300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}} 
              ease= {"easeOut"}
              className="bg-lime-400 text-start p-3 mx-16 font-semibold text-slate-950 rounded-b-lg rounded-s-lg">

                     React Developer
                     </motion.div>
                  {/* JOB DESC */}
                  <motion.div
              initial={{ x: "300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}} className="p-3 -mx-8 text-sm italic">
                 
<ul className='mt-5 list-disc ml-5 space-y-2'>
        {pointss.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>    ))}
      </ul>
                    </motion.div>
                  {/* JOB DATE */}
                  <motion.div
              initial={{ x: "300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}} 
              ease= {"easeOut"}
              className="p-3 -mx-5 text-red-400 text-sm font-semibold">
                    2021 - 2022{" "}
                    </motion.div>
                  {/* JOB COMPANY */}
                  <motion.div
              initial={{ x: "300px" }}
              whileInView={  { x: "0" } }
              transition={{type:"spring", duration:1}} className="p-1 rounded -mx-3 bg-lime-400  text-slate-950 text-sm font-semibold w-fit">
                    TCS
                    </motion.div>
               
              </div>
            </div>
              {/* EXPERIENCE LIST ITEM */}
             
            
            
          </div>
        </div>
        
    </div>
  )
}

export default Experinece