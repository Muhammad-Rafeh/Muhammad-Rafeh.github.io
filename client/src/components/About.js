import React from 'react'
import './about.css'

function About() {
    return (
        <div className='about-container-global'>
            <div className="about-container">
                <div className="about-heading">About Me</div>
                <div className="about-main-grid">
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
            </div>
        </div>
    )
}

export default About
