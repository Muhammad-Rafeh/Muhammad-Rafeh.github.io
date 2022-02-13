import React, { useEffect, useState } from 'react';
import Video from './Video'
import './videoCarousel.css'

function VideoCarousel() {

    const [ selectedVideo , setSelectedVideo ] = useState(1);
    
    function clickedVideo(video){
        setSelectedVideo(video)
    }

  return (
      <div className='w-100 p-4 vc-wrapper'>
          <div className='d-flex w-100 vc-wrapper-options-video'>
            <Options clickedVideo={clickedVideo} />
            <Video selectedVideo={selectedVideo}/>
          </div>
      </div>
  )
}

function Options({ clickedVideo }){

    return (
        <div className='vc-options-wrapper d-flex flex-column text-left'>
            <button onClick={()=>clickedVideo(1)}>
                <Option name={"Chat App"} />
            </button>
            <button onClick={()=>clickedVideo(2)}>
                <Option name={"Chat App"} />
            </button>
            <button onClick={()=>clickedVideo(3)}>
                <Option name={"Chat App"} />
            </button>
            <button onClick={()=>clickedVideo(4)}>
                <Option name={"Chat App"} />
            </button>
        </div>
    )
}

function Option({ name }){
    return(
        <div className='d-flex vc-option-wrapper text-start w-100'>
            <div className='vc-option-selected me-5'></div>
            <div className='w-100 pt-4'>{name}</div>
        </div>
    )
}


export default VideoCarousel;
