import React, { useState } from "react";
import "./card.css";
import { motion } from "framer-motion";

const Card = ({ cardData, setIsPaused, handleSelectedVideo }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />

      <motion.button
        whileHover={{ scale: 1.5 }}
        whileTap={{ scale: 0.9 }}
        style={{ background: "none", border: "none" }}
      >
        <div
          class="hero"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => {
            document.getElementById('video-section').scrollIntoView();
            return handleSelectedVideo(cardData.video)}}
        >
          <img className={isHover ? 'hero-profile-img-hover' : 'hero-profile-img'} src={cardData?.projectImage} alt="" />
          {!isHover && (
            <>
              <div
                style={{
                  backgroundImage: `${cardData?.cardColor}`,
                }}
                class="first hero-description-bk"
              ></div>
              <div class="hero-logo">
                <img src="codingIcon.png" />
              </div>
              <div class="hero-description">
                <p>{cardData?.title}</p>
              </div>
              <div class="hero-btn">
                <a href="#">Learn More</a>
              </div>
            </>
          )}
          {isHover && (
            <div className="hover-text-2" style={{
              backgroundImage: `${cardData?.cardColor}`,
            }}>
              <p>Click to play Video</p>
            </div>
          )}
        </div>
      </motion.button>
    </div>
  );
};

export default Card;
