import React from "react";
import "./card.css";

const Card = ({ cardData }) => {

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      />

      <div class="hero">
        <img
          class="hero-profile-img"
          src={cardData?.projectImage}
          alt=""
        />
        <div style={{
            backgroundImage: `${cardData?.cardColor}`,
          }}
          class="first hero-description-bk"></div>
        <div class="hero-logo">    
          <img src='codingIcon.png' />
        </div>
        <div class="hero-description">
          <p>{cardData?.title}</p>
        </div>
        <div class="hero-btn">
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
