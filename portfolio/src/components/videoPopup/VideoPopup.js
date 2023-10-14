import React from 'react';
import './videopopup.css'; // Import your CSS file for styling

const VideoPopup = ({ selectedVideo, setIsPopupVideo }) => {
  return (
    <div className="video-popup">
      <div className="video-popup-content">
      <button className="close-button" onClick={()=>setIsPopupVideo(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
            <line x1="6" y1="6" x2="18" y2="18" stroke="white" stroke-width="3" />
            <line x1="6" y1="18" x2="18" y2="6" stroke="white" stroke-width="3" />
          </svg>
        </button>
        <iframe
          title="Video"
          className="video-iframe"
          src={selectedVideo}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoPopup;
