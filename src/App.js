import React from 'react'
import Nav from './components/navigation/Nav';
import LandingPanel from './components/LandingPanel';
import SpringCarousel from './components/springCarousel/SpringCarousel';
// import Projects from './components/projects/Projects.js';
import About from './components/About.js';
import Contact from './components/contact/Contact';
import Skill from './components/Skill.js';
import './App.css';
import Card from './components/springCarousel/Card';
import ContactUs from './components/contactus/ContactUs';

const App = () => {
  return(
    <>
      <div className='App'>
        <div className="">
          <Nav />
          <LandingPanel />
          <SpringCarousel />
          {/* <Projects /> */}
          <About />
          <Skill />
          <ContactUs />
          <Card />
        </div>
      </div>
    </>
  )
}

export default App