import React from 'react'
import workBench from '../images/workBench.png'
import foxImage from '../images/foxImage.png'
import manFace from '../images/manFace.png'
import './about.css'
import Particles from 'react-particles-js';

function About() {
    return (
        <div className="about-container">
            <Particles className="about-particle"
                params={{
                particles: {
                    number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 1500,
                    }
                    },
                },
                }}
            />
            <div className="about-upper-shadow"></div>
            <div className="about-heading">About Me</div>
            <div className="about-main-grid">
                <div className="about-svg-wrapper">
                

                </div>
                
                <div className="about-p">
                        <div className="about-first-para">
                            <p> Hi, I’m Rafeh a MERN stack developer,</p>
                            <p>and I have been building for the web for a period of two years now.</p>
                            <br/>
                            <p>The illimitable learning in the Discipline of Computers thrilled me into becoming what I’m today,</p>
                            <p>‘A Developer and a Scholar of Computer Science.</p>
                        </div>
                        <div className="about-second-para">
                            One word that describes me the best is “Consistent”.
                            <br/><br />
                            I believe consistency can do miracles, all you need to do is put in the work and "trust the process".

                        </div>
                </div> 
            </div>
            <div className="about-lower-shadow"></div>
            
        </div>
    )
}

export default About
