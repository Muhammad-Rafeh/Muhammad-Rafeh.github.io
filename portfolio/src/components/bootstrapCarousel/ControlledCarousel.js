import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./bootstrapCarousel.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel({ selectedVideo }) {
  const [myVideo, setMyVideo] = useState("");

  useEffect(() => {
    const newVideo = (
      <video key={selectedVideo} width="100%" height="600px" controls autoPlay={true} loop>
        <source src={"/" + selectedVideo} />
      </video>
    );

    setMyVideo(newVideo);
  }, [selectedVideo]);

  return (
    <>
      <div className="bootstrap-carousel-container">
        <div class="container">
          <div class="header"></div>
          <div class="mainbody" id="video-section">
            {
              selectedVideo==""?(
                <div class="default-text">Click any project to play video</div>
              ):
              (
                myVideo
              )
            }
          </div>
          <div class="footer"></div>
        </div>
      </div>
    </>
  );
}

export default ControlledCarousel;
