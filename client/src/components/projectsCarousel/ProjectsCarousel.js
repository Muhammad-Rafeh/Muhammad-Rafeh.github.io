import React from 'react'
import './projectsCarousel.css'
import ProjectsCarouselCards from './ProjectsCarouselCards'
import Marquee from "react-fast-marquee";

import Ticker from 'react-ticker'

const projects = [
    {
        imgId : 1,
        projectTitle : "Chat App",
        description : "this is description of chat web application",
        themeColor : "#99E4D2"
    },
    {
        imgId : 2,
        projectTitle : "Ecommerce Website",
        description : "this is description of Ecommerce website",
        themeColor : "#FCBD01"
    },
    {
        imgId : 3,
        projectTitle : "Weather web app",
        description : "this is description of weather web application",
        themeColor : "#E0E6E8"
    },
    {
        imgId : 4,
        projectTitle : "Online web solution",
        description : "this is description of online web solution",
        themeColor : "#95E0FF"
    }
]

export default function ProjectsCarousel() {
    return (
        <div className="projects-carousel-wrapper pb-4">
            <ProjectsCarouselCardsMarquee />
        </div>
    )
}

function ProjectsCarouselCardsMarquee() {
    return(
        <div>
            <Marquee
                gradient={false}
            >
                <ProjectsCarouselCards data={projects[0]}/>
                <ProjectsCarouselCards data={projects[1]} />
            </Marquee>
            <Marquee
                gradient={false}
                direction='right'
            > 
                <ProjectsCarouselCards data={projects[2]}/>
                <ProjectsCarouselCards data={projects[3]} />
            </Marquee>
        </div>
       
    )
}