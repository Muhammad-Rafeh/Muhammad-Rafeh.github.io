import React from 'react'
import chatApp from '../../images/chatApp.png'
import ecommerceWebsite from '../../images/ecommerce.png'
import weatherApp from '../../images/weatherApp.png'
import webSolution from '../../images/sparetoolz.png'

export default function PojectCardLayout({data}){
    return(
        <>
            <div className='d-flex flex-column projects-cards-wrapper justify-content-center'>
                    <div style={{height : "150px"}}></div>
                    <div className="pb-5">
                        <ProjectCard data={data[1]} />
                    </div>
                    <div className='pt-5'>
                        <ProjectCard data={data[2]} />
                    </div>
                </div>
                <div className='d-flex flex-column projects-cards-wrapper'>
                    
                    <div className='pb-5 pt-5'>
                        <ProjectCard data={data[0]} />
                    </div>
                    <div className='pt-5'>
                        <ProjectCard data={data[3]} />
                    </div>
                </div>
        </>
    )
}

function ProjectCard(props) {

    var imgSrc;
    if(props.data.id==1){
        imgSrc=chatApp;
    }
    if(props.data.id==2){
        imgSrc=ecommerceWebsite;
    }
    if(props.data.id==3){
        imgSrc=weatherApp;
    }
    if(props.data.id==4){
        imgSrc=webSolution;
    }
    return (
        <div className="projectCard-wrapper">
            <div className="projectCard-desc-wrapper">
                <div className='projectCard-wrapper-inner'>
                    <img className="projectCard-img" src={imgSrc} />
                    <div className='projectCard-heading'>{props.data.name}</div>
                    <div className="projectCard-desc " >{props.data.desc}</div>
                </div>
            </div>
        </div>
    )
}

