import React, { useState , useEffect } from 'react';
import { motion } from 'framer-motion';
import NavIcon from './NavIcon';
import './nav.css'
// import NavDropDown from './NavDropDown';

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

export default function Nav() {

  const [ dropDown , setDropDown ] = useState(false);
  const handleClick = () => {
    setDropDown(prev=>!prev)
  }

  useEffect(() => {
    var navbar = document.getElementById("navbarCustom");

    window.addEventListener('scroll',myFunction)
  
    var sticky = navbar.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("scrolled");
      
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  },[])

  return (
    <>
      <div className="nav-wrapper-fixed">
        <div className="nav-wrapper-custom" id="navbarCustom" >
          <h2 className="logo-h2" ><span>WEB </span> Developer.</h2>
          <a className="nav-options">About</a>
          <a className="nav-options">Contact</a>
          <a className="nav-options">Skills</a>
          <a className="nav-options">Projects</a>

          
          <button className='nav-icon' onClick={handleClick}>
            <NavIcon />
          </button>

        </div>
        <MobileNav dropDown={dropDown} />
      </div>
     
    </>
  )
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function MobileNav({ dropDown }){
  return(
    <div className='nav-dropdown-wrapper nav-icon'>
      <motion.nav
        initial={false}
        animate={dropDown ? "open" : "closed"}
      >
          <motion.div className="nav-dropdown-background" variants={sidebar} />
          {dropDown ? <NavDropDown />: ""}
      </motion.nav>
      
    </div>
  )
}

function NavDropDown() {
  return (
      <div className='d-flex flex-column nav-dropdown-options justify-content-center'>
          <div>ABOUT</div>
          <div>CONTACT</div>
          <div>SKILLS</div>
          <div>PROJECTS</div>
      </div>
  )
}
