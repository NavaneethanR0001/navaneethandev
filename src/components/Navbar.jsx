import React from 'react'
import{motion} from "framer-motion";
import {
  
 rnlogo,
} from "../assets";
const Navbar = () => {
  return (
    <div className=' z-[999] w-full px-20  -py-10 flex justify-between items-center'>


<img
          src={rnlogo}
          alt='web-development'
          className='w-[200px] h-[110px]  object-contain cursor-pointer'
        />



    </div>
  )
}

export default Navbar