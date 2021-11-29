import logo from './logo.svg';
import hand from './images/hand.png'
import manFace from './images/manFace.png'
import womanFace from './images/womanFace.png'
import Home from './components/Home'
import EntryAnimationImage from './components/EntryAnimationImage';
import Nav from './components/Nav';
import LandingPanel from './components/LandingPanel';
import About from './components/About.js';
import Skill from './components/Skill.js';
import './App.css';
import { motion } from 'framer-motion';
import MyImg from './images/MyImg.jpg';
import { useEffect, useState }  from 'react'


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    animation:{y:[-1,1]},
    transition: {
      delay : 3,
      delayChildren: 0.5
    }
  }
}

const slideIntoView = {
  hidden : {
    y:"-100vh"
  },
  show : {
    y:"0vh",
    transition:{
      duration : 1
    }
  }
}

const name={
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay : 3.5,
      delayChildren: 0.5
    }
  }
}



function App() {

  const[ navAppear , setNavAppear ] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{setNavAppear(true)},3000)
  },[])

  return (
    <div className="App">
      <header className="App-header">
      <Nav className="nav-stick"/>
      {
          !navAppear ?
          <EntryAnimationImage />
          : "" 
        }
        {
          navAppear ? 
          
          <motion.div
          className="nav-stick1"
        variants={slideIntoView}
        initial="hidden"
        animate="show"
        >
         
       {/* <Nav className="nav-stick"/>  */}

          {/* <Nav /> */}
          <hr className="hr" />
          <LandingPanel />
          <About />
          <Skill />
          {/* <img src={hand} />
          <img src={womanFace} /> */}
          {/* <img src={manFace} className="namFace"/> */}
          {/* <Home /> */}
        </motion.div>
          :""
        }
       
      </header>
    </div>
  );
}

export default App;
