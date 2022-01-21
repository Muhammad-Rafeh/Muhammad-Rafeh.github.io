import React from 'react'
import chatApp from '../../images/chatApp.png'
import ecommerceWebsite from '../../images/ecommerce.png'
import weatherApp from '../../images/weatherApp.png'
import webSolution from '../../images/sparetoolz.png'
import { BsFillChatQuoteFill, BsArrowRight } from 'react-icons/bs'
import { AiFillShop } from 'react-icons/ai'
import { TiWeatherWindyCloudy } from 'react-icons/ti'
import { FaTools } from 'react-icons/fa'


import './projectsCarousel.css';

export default function ProjectsCarouselCards({ data }) {

    const backgroundColor = {
        backgroundColor : data.themeColor,
    }

    return (
        <div className='d-flex px-3 projects-carousel-cards-wrapper pt-4'>
            <ProjectsCarouselCardsImage imgId={data.imgId} />
            <div className='d-flex flex-column projects-carousel-cards-data-wrapper text-start' style={backgroundColor} >
                <div className='d-flex px-4 py-2'>
                    <ProjectsCarouselCardsIcon imgId={data.imgId} />
                    <div className='projects-carousel-cards-data-heading ps-2'>{data.projectTitle}</div>
                </div>
                <div className="projects-carousel-cards-data-description px-3">"{data.description}"</div>
                <div className="projects-carousel-cards-data-redirect">
                    <div className='projects-carousel-cards-data-redirect-line' />
                    <div className='d-flex justify-content-between projects-carousel-cards-redirect-content-wrapper'>
                        <div className='projects-carousel-cards-data-redirect-text' >View on Github</div>
                        <BsArrowRight className='my-auto me-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectsCarouselCardsImage({ imgId }){
    return(
        <>
        {
            imgId===1 ? <img src={chatApp} className='projects-carousel-cards-image' alt="chatApp" />: ""
        }
        {
            imgId===2 ? <img src={ecommerceWebsite} className='projects-carousel-cards-image' alt="chatApp" />: ""
        }
        {
            imgId===3 ? <img src={weatherApp} className='projects-carousel-cards-image' alt="chatApp" />: ""
        }
        {
            imgId===4 ? <img src={webSolution} className='projects-carousel-cards-image' alt="chatApp" />: ""
        }
        </>       
    )
}

function ProjectsCarouselCardsIcon({ imgId }){
    return(
        <>
        {
            imgId===1 ? <BsFillChatQuoteFill className='projects-carousel-cards-icon' />: ""
        }
        {
            imgId===2 ? <AiFillShop className='projects-carousel-cards-icon' />: ""
        }
        {
            imgId===3 ? <TiWeatherWindyCloudy className='projects-carousel-cards-icon' />: ""
        }
        {
            imgId===4 ? <FaTools className='projects-carousel-cards-icon' />: ""
        }
        </>     
    )
}
