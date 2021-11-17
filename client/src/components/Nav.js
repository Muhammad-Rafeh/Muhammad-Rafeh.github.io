import React, { useState , useEffect } from 'react'
import { motion } from 'framer-motion';
import './nav.css'

const name={
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay : 1,
        delayChildren: 0.5
      }
    }
  }

function Nav() {

 
    const [scrolled,setScrolled]=React.useState(false);
  const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 200 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }

    useEffect(() => {
      window.addEventListener('scroll',handleScroll)
    })
  let navbarClasses=['navbar'];
    if(scrolled){
      navbarClasses.push('scrolled');
    }

    return (
       <div className="nav-wrapper" >
            {/* // <div className={navbarClasses.join(" ")} id="navbar"> */}
              <h2 className="logo-h2" ><span>WEB</span> Developer</h2>
              {/* <motion.h3 
                variants={name}
                initial="hidden"
                animate="show"
                
              className="name"> </motion.h3> */}
             
                <a className="nav-options">About</a>
                <a className="nav-options">Contact</a>
                <a className="nav-options">Skills</a>
                <a className="nav-options">Projects</a>
              
              
          </div>
       
    )
}

export default Nav
