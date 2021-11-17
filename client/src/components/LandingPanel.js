import React from 'react'
import mypngimg from '../images/mypngimg1.png'
import './landingPanel.css'


function LandingPanel() {
    return (
        <div className="lp-container">
            <div className="lp-datawrapper" >
                <div>Hey, I'm</div>
                <div className="lp-name">M.Rafeh</div>
                <div>Full Stack Webdeveloper</div>
            </div>
            <img src={mypngimg} className="lp-mypngimg" />
        </div>
    )
}

export default LandingPanel
