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
        themeColor : "#C4FCEF",
        imgAddr : "chatApp.png",
        imgWidth : "498px"
    },
    {
        imgId : 2,
        projectTitle : "Ecommerce Website",
        description : "this is description of Ecommerce website",
        themeColor : "#FFC75F",
        imgAddr : "ecommerceWebsite.png",
        imgWidth : "660px"
    },
    {
        imgId : 3,
        projectTitle : "Weather web app",
        description : "this is description of weather web application",
        themeColor : "#E0E6E8",
        imgAddr : "weatherApp.png",
        imgWidth : "528px"
    },
    {
        imgId : 4,
        projectTitle : "Online web solution",
        description : "this is description of online web solution",
        themeColor : "#D5ECF5",
        imgAddr : "sparetoolz.png",
        imgWidth : "485px"
    }
]

export default function ProjectsCarousel() {
    return (
        <div className="projects-carousel-wrapper pb-5">
             <div className='pt-1 '>
                <h1 className='ps-5 projects-heading text-start'>PROJECTS</h1>
            </div>
            <div className='py-5'></div>
            <ProjectsCarouselCardsMarquee />
            <div className='py-5 pb-5'></div>
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