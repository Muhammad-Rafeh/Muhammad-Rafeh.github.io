import { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
   cursor: all-scroll;
   color:white;
   background:#333;
   width: 100%;
   height: 50px;
   overflow: hidden;
   white-space: nowrap;
`;

const DragSpan = styled.div`
    line-height: 50px;
    height: 50px;
    position: relative;
    user-select: none;
`;

export const Marquee = ({ children, freq = 15, offset = 1 }) => {
   let dragSpan = useRef();
   let scrollTimer = useRef(null);
   let prePageX = useRef();
   let currentPageX = useRef();
   let spanWidth = useRef();
   let isDragging = useRef(false);
   
   const [left, setLeft] = useState(window.innerWidth);
   //const [isDragging, setIsDragging] = useState(false);

   const move = useCallback(() => {
    const offset = 1;
    let left_ = left - offset;
    if (left_ <  -spanWidth.current) {
      left_ = window.innerWidth;
    }
    setLeft(left_);
  }, [left]);

  const handleMouseEnter = useCallback(() => {
    clearInterval(scrollTimer.current);
  }, []);

  const handMouseLeave = useCallback(() => {
    scrollTimer.current = setInterval(move, 15);
    //setIsDragging(false)
    isDragging.current = false;
  }, [move,]);

  const handleDrag = useCallback(e => {console.log('handleDrag: ' +isDragging.current);
    if(!isDragging.current) return null; 

    console.log('e.pageX: ' + e.pageX);
    prePageX.current = currentPageX.current;
    currentPageX.current = e.pageX;
    const left_ = left + (currentPageX.current - prePageX.current);
    setLeft(left_);
  }, [left]);

  const handleMouseDown = useCallback(e => {
    //setIsDragging(true); 
    isDragging.current = true;
    console.log(isDragging.current);
    prePageX.current = e.pageX;
    currentPageX.current = prePageX.current;
  }, []);

  const handleMouseUp = useCallback(e => {
    //setIsDragging(false);
    isDragging.current = false;
  }, []);

   const startMarquee = useCallback(() => {
     const spanWidth_ = dragSpan.current.getBoundingClientRect().width;
     const windowWidth = window.innerWidth;
     spanWidth.current = Math.max(spanWidth_, windowWidth);
     scrollTimer.current = setInterval(move, freq);
   }, [freq, move]);

   useEffect(() => {
      startMarquee();
      
       return () => {
         clearInterval(scrollTimer.current)
       }
   }, [startMarquee])

   //const handleDragging = isDragging ? handleDrag : null;
   
    return (
      <div
        className="marquee-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleDrag}
      >
        <div className="drag-span" style={{ left: left }}>
          <span ref={dragSpan}>{children} - {left}</span>
        </div>
      </div>
    );


}