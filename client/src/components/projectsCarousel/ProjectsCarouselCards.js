import React, { useState } from 'react'
import chatApp from '../../images/chatApp.png'
import ecommerceWebsite from '../../images/ecommerce.png'
import weatherApp from '../../images/weatherApp.png'
import webSolution from '../../images/sparetoolz.png'
import { BsFillChatQuoteFill, BsArrowRight } from 'react-icons/bs'
import { AiFillShop } from 'react-icons/ai'
import { TiWeatherWindyCloudy } from 'react-icons/ti'
import { FaTools, FaPlay } from 'react-icons/fa'
import { GrPlayFill } from 'react-icons/gr'


import './projectsCarousel.css';

export default function ProjectsCarouselCards({ data }) {

    const [ hover , setHover ] = useState(0); 

    const handleHover = () => {
        console.log(hover);
        setHover(data.imgId);
    }
    const resetHover = () => {
        console.log(hover);
        setHover(0);
    }

    return (
        <div className='d-flex projects-carousel-cards-wrapper pt-4 pe-4' onMouseEnter={handleHover} onMouseLeave={resetHover}>
            <ProjectsCarouselCardsImage data={data} hover={hover} />
            <ProjectsCarouselCardData data={data} />
        </div>
    )
}

function ProjectsCarouselCardsImage({ data, hover }){

    const imgUrl = getImageUrl(data.imgId);

    const backgroundImage = {
        backgroundImage : 'url('+imgUrl+')',
        width : `${data.imgWidth}`
    }

    return(
        <>
        {    data.imgId===1 ?
            <ProjectsCarouselCardsImageBackground hover={hover} imgId={data.imgId} imgStyle={backgroundImage} />
            : ""
        }
        {
            
            data.imgId===2 ? 
            <ProjectsCarouselCardsImageBackground hover={hover} imgId={data.imgId} imgStyle={backgroundImage} />
            : ""
        }
        {
            data.imgId===4 ?
            <ProjectsCarouselCardsImageBackground hover={hover} imgId={data.imgId} imgStyle={backgroundImage} />
            : ""
        }
        {
            data.imgId===3 ?
            <ProjectsCarouselCardsImageBackground hover={hover} imgId={data.imgId} imgStyle={backgroundImage} />
            : ""
            
        }
        
        </>       
    )
}

function getImageUrl(imgId){
    if(imgId===1){
        return chatApp;
    }
    if(imgId===2){
        return ecommerceWebsite;
    }
    if(imgId===3){
        return weatherApp;
    }
    if(imgId===4){
        return webSolution;
    }
}

function ProjectsCarouselCardsImageBackground({ hover , imgId , imgStyle }){
    return(
        <div className={hover===imgId ? 'projects-carousel-cards-image-background-hover':'projects-carousel-cards-image-background'} style={imgStyle}>
            <div className={hover===imgId ? "projects-carousel-cards-image-data-hover d-flex align-items-center h-100 ps-5":"projects-carousel-cards-image-data d-flex align-items-center h-100 ps-5" } >
                <FaPlay className='projects-carousel-cards-foreground-icon me-4' />
                <div className='projects-carousel-cards-foreground-text'>Video</div>
            </div>
        </div>
    )
}
//// : "projects-carousel-cards-image-foreground d-flex align-items-center"
function ProjectsCarouselCardsImageForeground({ hover, imgId }){
    return(
        <div className={"projects-carousel-cards-image-foreground-hover d-flex align-items-center" } >
            <FaPlay className='projects-carousel-cards-foreground-icon me-4' />
            <div className='projects-carousel-cards-foreground-text'>Video</div>
        </div>
    )
}

function ProjectsCarouselCardsImageForeground2({ hover, imgId }){
    return(
        <div className={"projects-carousel-cards-image-foreground-hover d-flex align-items-center" } >
            <FaPlay className='projects-carousel-cards-foreground-icon me-4' />
            <div className='projects-carousel-cards-foreground-text'>Video</div>
        </div>
    )
}

function ProjectsCarouselCardData({ data }){

    const backgroundColor = {
        backgroundColor : data.themeColor,
    }

    return(
        <div className='d-flex flex-column projects-carousel-cards-data-wrapper text-start' style={backgroundColor} >
            <div className='projects-carousel-cards-title-desc-wrapper'>
                <div className='d-flex pb-1'>
                    <ProjectsCarouselCardsIcon data={data} />
                    <div className='projects-carousel-cards-data-heading ps-2'>{data.projectTitle}</div>
                </div>
                <div className="projects-carousel-cards-data-description">{data.description}</div>
            </div>
            <div className="projects-carousel-cards-data-redirect">
                <div className='projects-carousel-cards-data-redirect-line' />
                <div className='d-flex justify-content-between projects-carousel-cards-redirect-content-wrapper'>
                    <div className='projects-carousel-cards-data-redirect-text' >View on Github</div>
                    <BsArrowRight className='my-auto me-4' />
                </div>
            </div>
        </div>
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

