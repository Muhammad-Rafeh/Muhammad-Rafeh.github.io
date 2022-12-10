import React from 'react'
import EntryAnimationImage from './components/EntryAnimationImage';
import Nav from './components/navigation/Nav';
import LandingPanel from './components/LandingPanel';
import ProjectsCarousel from './components/projectsCarousel/ProjectsCarousel';
import VideoCarousel from './components/videoCarousel/VideoCarousel';
import ControlledCarousel from './components/bootstrapCarousel/ControlledCarousel';
import About from './components/About.js';
import Skill from './components/Skill.js';
import Projects from './components/projects/Projects.js';
import Contact from './components/contact/Contact';
import './App.css';
import { motion } from 'framer-motion';
import { useEffect, useState }  from 'react'
import RandomMarquee from './components/randomMarquee/RandomMarquee';
import Marquee from './components/draggableMarquee/Marquee';
import DraggableMarquee from './components/draggableMarquee/DraggableMarquee';

const slideIntoView = {
  hidden : {
    y:"200vh"
  },
  show : {
    y:"0vh",
    transition:{
      duration : 1
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
      <div className="App-header">
      <Nav />
      {
        navAppear ?  
        <motion.div
        className="nav-stick1"
        variants={slideIntoView}
        initial="hidden"
        animate="show"
        >
          <LandingPanel />
          <ProjectsCarousel />
          <ControlledCarousel />
          {/* <VideoCarousel /> */}
          <Projects />
          <About />
          {/* <RandomMarquee /> */}
          {/* <DraggableMarquee/> */}
          <Skill />
          <Contact />
          
        </motion.div>
        :
        <EntryAnimationImage />
      }
      </div>
    </div>
  );
}

export default App;
