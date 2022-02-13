import React from 'react';
import EcommerceVideo from '../../images/ecommerceVideo.mp4'

function Video({selectedVideo}){
    return(
        <div className='vc-video-wrapper text-start'>
            { console.log(selectedVideo)}
            <video height="240" controls>
                <source src={EcommerceVideo} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video;
