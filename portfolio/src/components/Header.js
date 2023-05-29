import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="landing-header-background">
        {/* <div className="landing-header-top-space">a</div> */}
        <div className="landing-header-container">
          <>.</>
          <div className="landing-header-text-wrapper">
            <h5>Dev M.Rafeh</h5>
            <div className="landing-header-text-line"></div>
            <div className="landing-header-text-p">
              Hey, I'm a ... Full Stack Webdeveloper.
            </div>
            <div className="landing-header-button-wrapper">
            <button className="landing-header-button">EXPLORE</button>
            <div className="landing-header-button-slogan">Building Dreams <div></div></div>
            </div>
          </div>
          <div className="landing-header-img-section">
            <div className="landing-header-img-wrapper">
              <img className="landing-header-img" src="/header-image.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
