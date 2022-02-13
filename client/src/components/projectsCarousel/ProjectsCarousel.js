import React, { useState , useReducer , useRef, useMemo, useEffect } from 'react'
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

const initialDragState = {
    directionFirst : "left",
    directionSecond : "right",
    mouseUp : true
}

function drag(state , action){
    switch (action.type) {
        case 'draggedFirstRight':
          return {
              ...state,
              directionFirst : "right"
            };
        case 'draggedFirstLeft':
            return {
                ...state,
                directionFirst : "left"
            };
        case 'draggedSecondRight':
            return {
                ...state,
                directionSecond : "right"
            };
        case 'draggedSecondLeft':
            return {
                ...state,
                directionSecond : "left"
            };
        case 'mouseUp' :
            return {
                ...state,
                mouseUp : !state.mouseUp
            }
        default:
            return {
                ...state
            };
    }
}

const oldX = { oldX : 0 };

let dispatchGlobal;

function ProjectsCarouselCardsMarquee() {

    const [ speedFirst, setSpeedFirst ] = useState(20);
    const [ speedSecond, setSpeedSecond ] = useState(20);


    const [state,dispatch] = useReducer(drag,initialDragState)
    dispatchGlobal = dispatch;
    const upperMarquee = useRef();
    const lowerMarquee = useRef();

    const handleDragFirst = useMemo(() => findDragDirectionFirst , []);
    const handleDragSecond = useMemo(() => findDragDirectionSecond , []);

    useEffect(()=>{

        const UpperMarquee = upperMarquee.current;
        

        UpperMarquee.addEventListener("mousedown", () => {
            UpperMarquee.addEventListener("mousemove",handleDragFirst);
        }
        );

        UpperMarquee.addEventListener('mouseup', () => {
            UpperMarquee.removeEventListener('mousemove',handleDragFirst)
        });

        return ()=>{
            UpperMarquee.removeEventListener("mousedown",handleDragFirst);
        }
    },[])


    useEffect(()=>{

        const LowerMarquee = lowerMarquee.current;

        LowerMarquee.addEventListener("mousedown", () => {
            LowerMarquee.addEventListener("mousemove",handleDragSecond);
        });

        LowerMarquee.addEventListener('mouseup', () => {
            LowerMarquee.removeEventListener('mousemove',handleDragSecond)
        });

        return ()=>{
            LowerMarquee.removeEventListener("mousedown",handleDragSecond)
        }
    },[])


    return(
        <div>
            <div ref={upperMarquee} style={{"cursor":"grab"}}> 
                <Marquee
                    gradient={false}
                    direction={state.directionFirst}
                    speed={speedFirst}
                >
                    <ProjectsCarouselCards data={projects[0]}/>
                    <ProjectsCarouselCards data={projects[1]} />
                </Marquee>
            </div>
            <div ref={lowerMarquee} style={{"cursor":"grab"}}>
                <Marquee
                    gradient={false}
                    direction={state.directionSecond}
                    speed={speedSecond}
                > 
                    <ProjectsCarouselCards data={projects[2]}/>
                    <ProjectsCarouselCards data={projects[3]} />
                </Marquee>
            </div>
        </div>
       
    )
}

function findDragDirectionFirst(e){
           
    if(oldX.oldX > e.pageX){
        setDirection("First","Left");
    }
    if(oldX.oldX < e.pageX){
        setDirection("First","Right");
    }
    oldX.oldX = e.pageX;
    
}

function findDragDirectionSecond(e){
           
    if(oldX.oldX > e.pageX){
        setDirection("Second","Left");
    }
    if(oldX.oldX < e.pageX){
        setDirection("Second","Right");
    }
    oldX.oldX = e.pageX;
    
}

function setDirection(marquee,direction){
const event = "dragged"+marquee+direction;
dispatchGlobal({type:event});
}
