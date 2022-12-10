import React, { useState , useReducer , useRef, useMemo, useEffect, createRef } from 'react'
import Marquee from "react-fast-marquee";
import './projectsCarousel.css'
import MouseSpeed from 'mouse-speed'

const initialDragState = {
    direction : "left",
    mouseUp : true
}

function ProjectsCarouselCardsMarquee({ children, index }) {

    var speed = new MouseSpeed();

    const [ pickAndDropSpeed, setPickAndDropSpeed ] = useState(20);

    const [state,dispatch] = useReducer(drag,initialDragState)

    const handleDrag = useMemo(() => findDragDirection , []);

    
    function drag(state , action){
        switch (action.type) {
            case 'draggedRight':
              return {
                  ...state,
                  direction : "right"
                };
            case 'draggedLeft':
                return {
                    ...state,
                    direction : "left"
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
    

    useEffect(()=>{

        const marquee = index.current
        
        marquee.addEventListener("mousedown", () => {
            speed.init(handlePickAndDropSpeed)
            marquee.addEventListener("mousemove",handleDrag);
        }
        );

        window.addEventListener('mouseup', () => {
            marquee.removeEventListener('mousemove',handleDrag)
            speed.destroy( setPickAndDropSpeed(20));
           
        });

        return ()=>{
            marquee.removeEventListener("mousedown",handleDrag);
        }
    },[])

    return(
        <div>
            <div ref={index} style={{"cursor":"grab"}}> 
                <Marquee
                    gradient={false}
                    direction={state.direction}
                    speed={pickAndDropSpeed}
                >
                    {children}
                </Marquee>
            </div>
        </div>
       
    )


    function findDragDirection(e){
        
        if(oldX.oldX > e.pageX){
            setDirection("Left");
        }
        if(oldX.oldX < e.pageX){
            setDirection("Right");
        }
        oldX.oldX = e.pageX;
        
    }

    function setDirection(direction){
        const event = "dragged"+direction;
        dispatch({type:event});
    }

    function handlePickAndDropSpeed () {
        if(speed.speedX < 0){
            setPickAndDropSpeed(40)
        }
        else{
            setPickAndDropSpeed(speed.speedX*100)
        }
    }

}

export default ProjectsCarouselCardsMarquee