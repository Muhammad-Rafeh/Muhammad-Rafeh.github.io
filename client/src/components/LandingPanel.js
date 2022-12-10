import React from 'react'
import mypngimg from '../images/mypngimg1.png'
import './landingPanel.css'


function LandingPanel() {
  return (
    <div className="lp-global-container">
      <div className='lp-container'>
        <div className="lp-datawrapper" >
          <div className="lp-name">M.Rafeh</div>
          <div className='lp-data'>Hey, I'm a ...</div>
          <div className='lp-data'>Full Stack Webdeveloper.</div>
        </div>
        <div className="lp-mypngimg-wrapper">
          <img src={mypngimg} className="lp-mypngimg" />
        </div>
      </div>
    </div>
  )
}

export default LandingPanel
