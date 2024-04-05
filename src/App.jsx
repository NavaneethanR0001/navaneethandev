import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import LocomotiveScroll from 'locomotive-scroll';
import Experinece from './components/Experinece'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen  bg-[#c0fab4]'>
<Navbar/>   
<Landing/>
<Marquee/>
<About/>
<Experinece/>
<Skills/>
<Portfolio/>

</div>
  )
}

export default App
