import React from 'react'
import workBench from '../images/workBench.png'
import foxImage from '../images/foxImage.png'
import manFace from '../images/manFace.png'
import './about.css'

function About() {
    return (
        <div className="about-container">
            <div className="about-fox">
                <div className="about-workbench-img-wrapper">
                    <img className="about-workbench-img" src={workBench} />
                </div>
                
                <div className="about-fox-text">
                    <div className="about-fox-heading">About Me</div>
                    

                    
                    <div className="about-fox-p">
                        <p> Hi, I’m Rafeh a MERN stack developer,</p>
                        <p>and I have been building for the web for a period of two years now.</p>
                        <br/>
                        <p>The illimitable learning in the Discipline of Computers thrilled me into becoming what I’m today,</p>
                        <p>‘A Developer and a Scholar of Computer Science.</p>
                    </div>
                </div>

                
                
            </div>
            
        </div>
    )
}

export default About
