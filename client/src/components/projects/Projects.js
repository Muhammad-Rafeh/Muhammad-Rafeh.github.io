import React, { useEffect } from 'react'
import './projects.css'
import myimg from '../../images/mypngimg3.jpg'
import ProjectCardLayout from './ProjectCard'
import ProjectsCarousel from './ProjectsCarousel'

const data = [ 
    {
        id : 1,
        name : "Chat App",
        desc : "A chat application with real time communication. Made by using Socket.io, React.Js, Node.Js, Express, MongoDB."
    },
    {
        id : 2,
        name : "Ecommerce Website",
        desc : "A chat application with real time communication. Made by using Socket.io, React.Js, Node.Js, Express, MongoDB."
    },
    {
        id : 3,
        name : "Weather Website",
        desc : "A chat application with real time communication. Made by using Socket.io, React.Js, Node.Js, Express, MongoDB."
    },
    {
        id : 4,
        name : "Web Solution",
        desc : "A chat application with real time communication. Made by using Socket.io, React.Js, Node.Js, Express, MongoDB."
    }

]

function Projects() {
    
    return (
        <div className="projects-container">
            {/* <div className='d-flex justify-content-around flex-wrap'>
                <ProjectCardLayout data={data} />
            </div>
            <div className='project-carousel-top-space' />
            {/* <ProjectsCarousel /> */}
            {/* <div className='project-carousel-top-space' /> */}
        </div>
    )
}

function ProjectsHeading() {
    return (
        <>
            <div className=''>
                <h1 className='projects-heading'>PROJECTS</h1>
            </div>
        </>
    )
}

export default Projects
