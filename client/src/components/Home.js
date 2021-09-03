import React from 'react'
import MyImg from '../images/MyImg.jpg';
import './home.css';
function Home() {
    return (
        <div className="home-wrapper">
            <div className="info-wrapper">
                <div className="protfolio">
                    Protfolio
                </div>
                <div className="skills">
                    <div>
                    Skills
                    </div>
                   
                    <div className="skill-category-wrapper">
                        <div>React JS</div>
                        <div>Node JS</div>
                        <div>Mongo DB</div>
                        <div>Express</div>
                        <div>Redux</div>
                        <div>Javacript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>BootStrap</div>
                        <div>FireBase</div>
                    </div>
                </div>
                <div className="moto">
                    moto
                </div>
            </div>
            <img className="my-img" src={MyImg} alt="mt img" />
        </div>
    )
}

export default Home
