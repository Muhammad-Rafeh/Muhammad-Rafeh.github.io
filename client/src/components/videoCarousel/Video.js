import React, { useEffect, useState, useRef } from 'react';
import EcommerceVideo from '../../images/ecommerceVideo.mp4'
import ChatAppVideo from '../../images/chatAppVideo.mp4'

function Video({selectedVideo}){

    const videoRef = useRef();

    const [videoSource, setVideoSource] = useState()

    useEffect(() => {
        setVideoSource(getVideoSource(selectedVideo))
    }, [selectedVideo])

    return(
        <div className='vc-video-wrapper text-start'>
            { console.log(selectedVideo)}
            { console.log(videoSource)}
            <video height="240" controls ref={videoRef} src={videoSource}>
            </video>
        </div>
    )
}

const getVideoSource = (selectedVideo) => {
    if(selectedVideo === 1) return ChatAppVideo
    if(selectedVideo === 3) return EcommerceVideo
    else return null
}

export default Video;
