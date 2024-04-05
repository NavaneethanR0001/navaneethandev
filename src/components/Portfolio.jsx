
import { motion, useScroll, useTransform } from "framer-motion";
import {
  
  carvoyage,ecomerce,dd,shoe,
} from "../assets";

import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Next.Js  Carvoyage UI",
    desc: "Developed and maintained user interfaces for web applications using ReactJS, NextJS, and JavaScript.Utilized frontend frameworks such as React.js, Framer motion to build dynamic and interactive user interfaces.",
    img: carvoyage,
    link: "https://navaneethan-carvoyage-ui.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "React.js Shopping App",
    desc: "Developed and maintained user interfaces for web applications using JSX, Tailwind CSS.Utilized frontend frameworks such as REACT.js to build dynamic and interactive user interfaces using Pages Routing.",
    img: ecomerce,
    link: "https://navaneethan-ecommercecartify.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "3D Three Js App",
    desc: "Developed the 3D website with Three JS,React JS, Tailwind CSS.Utilized frontend animation frameworks like Framer Motion for creating the visually appealing animation for User experince.Color and logo changing functionality by uploading file.",
    img: dd,
    link: "https://navaneethan3dweb.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Star Shoe UI website",
    desc: "Developed and maintained user interfaces for web applications using ReactJS, NextJS, and JavaScript.Utilized frontend frameworks such as React.js, Framer motion to build dynamic and interactive user interfaces.",
    img: shoe,
    link: "https://navaneethanstarshoe.vercel.app/",
  },
  
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
    
    >
      <div  className="h-[600vh] relative rounded-tl-[60px] bg-gradient-to-r from-[#69fb75] to-[#baf0bc] rounded-tr-[60px]" ref={ref}>
        <div className=" h-[100vh]  text-slate-900 flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-3 text-white">
                  <h1 className="text-xl font-bold mt-12 md:text-4xl lg:text-6xl xl:text-4xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                  <a href={item.link}>
                    <img src={item.img} alt=""  className="xl:w-[700px] xl:h-[400px] object-contain"/>
                    </a>
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] -mt-14 text-[#012324] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <a href={item.link} className="flex justify-center">
                    <button className="p-2 -mt-5 text-sm md:p-4 md:text-md lg:p-5 lg:text-lg bg-white hover:bg-[#f65cd7] hover:text-white text-gray-600 font-semibold  rounded">See Demo</button>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className=" h-screen flex flex-col gap-16  items-center rounded-tl-3xl  rounded-tr-3xl bg-[#a2f777] justify-center text-center">
        <h1 className="text-8xl text-emerald-600">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
              MERN Stack Developer React Node JS
              </textPath>
            </text>
          </motion.svg>
          <a
            href="https://www.linkedin.com/in/navaneethan-ravichandran-7584871b3/"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio