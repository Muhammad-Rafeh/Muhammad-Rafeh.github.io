import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ChatAppVideo from "../../images/chatAppVideo.mp4";
import EcommerceVideo from "../../images/ecommerceVideo.mp4";
import SparetoolzVideo from "../../images/sparetoolzClone.mp4";
import Tapp from "../../images/tapp.mp4";
import Spichaser from "../../images/spichaser.mp4";
import Augersoft from "../../images/augersoft.mp4";
import "./bootstrapCarousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className="projects-carousel-heading-wrapper">
        <h1 className="ps-5 projects-carousel-heading d-flex justify-center align-center items-center text-start">
          Videos
        </h1>
      </div>
    <div className="bootstrap-carousel-container">
       
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="video" controls src={ChatAppVideo}></video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="video" controls src={EcommerceVideo}></video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="video" controls src={SparetoolzVideo}></video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper-mobile">
            <video className="video-mobile" controls src={Tapp}></video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper-mobile">
            <video className="video-mobile" controls src={Spichaser}></video>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="video-wrapper">
            <video className="video" controls src={Augersoft}></video>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
    
  );
}

export default ControlledCarousel;
