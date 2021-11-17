import React from 'react'
import foxImage from '../images/foxImage.png'
import './about.css'

function About() {
    return (
        <div>
            <div className="about-fox">
                <img className="about-img" src={foxImage} />
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
