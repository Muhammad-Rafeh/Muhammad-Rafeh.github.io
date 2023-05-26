import React, { useState } from 'react'
import './navIcon.css'

function NavIcon() {

    
    const [ navOpen , setNavOpen] = useState(false);

    const handleClick = () => {
        setNavOpen(prev => !prev);
    }

    return (
        <div >
            <button className={navOpen ? "nav-icon-open":"nav-icon-button"} onClick={handleClick}>
                <div className='nav-icon-div1'></div>
                <div className='nav-icon-div2'></div>
                <div className='nav-icon-div3'></div>
            </button>
        </div>
    )
}

export default NavIcon
