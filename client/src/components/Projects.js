import React, { useEffect } from 'react'
import './projects.css'
import myimg from '../images/mypngimg3.jpg'
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
    var y;
    useEffect(() => {
        
        var parallexImg = document.getElementById("parallex-img");

        y = parallexImg.offsetTop-500;
        window.addEventListener('scroll',myFunction)
        function myFunction(){
            if(window.pageYOffset >= y){
                // console.log("reached")
                parallexImg.setAttribute("style" , `background-position : 2vw ${200-((window.pageYOffset-y)/3)}px`)
            }
        } 
    })

    return (
        <div className="projects-container">
            <h1 className='pt-5 projects-heading'>PROJECTS</h1>
            <div className='d-flex justify-content-around flex-wrap'>
                <div className='parallex-wrapper'>
                    <div className='parallex' id="parallex-img"></div>
                </div>
                <ProjectCardLayout data={data} />
            </div>
            <div className='project-carousel-top-space' />
            {/* <ProjectsCarousel /> */}
            <div className='project-carousel-top-space' />
        </div>
    )
}

export default Projects
