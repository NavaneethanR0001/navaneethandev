import React from 'react'
import{motion} from "framer-motion";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".5" className='w-full  bg-[#39a60a] rounded-tl-3xl py-20  rounded-tr-3xl'>
        <div className='text border-t-2 whitespace-nowrap  overflow-hidden border-b-2 flex border-zinc-300'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:5}} className='text-[10vw] leading-none text-white font-medium pr-20'> M E R N STACK DEVELOPER</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:5}} className='text-[10vw] leading-none text-white font-medium pr-20'> M E R N STACK DEVELOPER</motion.h1>
        </div>

    </div>
  )
}

export default Marquee