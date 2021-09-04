import React from 'react'
import MyImg from '../images/MyImg.jpg';
import WeatherApp from '../images/weatherApp.png';
import ChatApp from '../images/chatApp.png';
import Ecommerce from '../images/ecommerce.png';
import './home.css';

import { motion } from 'framer-motion';
function Home() {
    return (
        <div className="home-wrapper">
            <div className="info-wrapper">
                <div className="protfolio">
                    <div>Work</div>
                    <div className="prot-items-wrapper">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img className="weather-app" src={WeatherApp} />
                            <div className="github">GitHub</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img className="chat-app" src={ChatApp} />
                            <div className="github">GitHub</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <img className="ecommerce-app" src={Ecommerce} />
                            <div className="github">GitHub</div>
                        </motion.div>
                    </div>
                </div>
                <div className="skills">
                    <div>
                    Skills
                    </div>
                   
                    <div className="skill-category-wrapper">
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >React JS</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Node JS</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Mongo DB</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Express</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Redux</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Javacript</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >HTML</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >CSS</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >BootStrap</motion.div>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >FireBase</motion.div>
                        {/* <div>Node JS</div>
                        <div>Mongo DB</div>
                        <div>Express</div>
                        <div>Redux</div>
                        <div>Javacript</div>
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>BootStrap</div>
                        <div>FireBase</div> */}
                    </div>
                </div>
                <div className="moto">
                    "To guarantee the utmost satisfaction of my clients."
                </div>
            </div>
            <img className="my-img" src={MyImg} alt="mt img" />
        </div>
    )
}

export default Home
