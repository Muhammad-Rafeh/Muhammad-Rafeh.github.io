import React, { useState } from "react";
import Nav from "./components/navigation/Nav";
import LandingPanel from "./components/LandingPanel";
import SpringCarousel from "./components/springCarousel/SpringCarousel";
// import Projects from './components/projects/Projects.js';
import About from "./components/About.js";
import Contact from "./components/contact/Contact";
import Skill from "./components/Skill.js";
import "./App.css";
import Card from "./components/springCarousel/Card";
import ContactUs from "./components/contactus/ContactUs";
import ControlledCarousel from "./components/bootstrapCarousel/ControlledCarousel";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleSelectedVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
  }

  return (
    <>
      <div className="App">
        <div className="">
          <Nav />
          <LandingPanel />
          <div className="mt-1 projects-carousel-heading-wrapper">
            <h1 className="ps-5 projects-carousel-heading d-flex justify-center align-center items-center text-start">
              PROJECTS
            </h1>
          </div>
          <div className="parent">
            <div className="projects-container">
              <SpringCarousel handleSelectedVideo={handleSelectedVideo} />
              <ControlledCarousel selectedVideo={selectedVideo} />
            </div>
          </div>
          {/* <Projects /> */}
          <About />
          <Skill />
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default App;
