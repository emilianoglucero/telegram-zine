import React from 'react';

import video1 from '../assets/videos/1.webm';
import video2 from '../assets/videos/1-1.webm';
import video3 from '../assets/videos/1-2.webm';
import video4 from '../assets/videos/1-3.webm';
import video5 from '../assets/videos/2-1.webm';
import video6 from '../assets/videos/2-2.webm';



function Video(props) {
    return (
      <div className="draggable" id={props.video.id}>
        <video className="videos" width={props.video.width} height={props.video.height} autoPlay muted playsInline loop>
          <source src={props.video.url} type="video/mp4"/>
        </video>
      </div>
    );
}

const VideoBuilder = () => {
    return(
        <div className="video-builder">
            <Video  video={Video1}/>
            <Video  video={Video2}/>
            <Video  video={Video3}/>
            <Video  video={Video4}/>
            <Video  video={Video5}/>
            <Video  video={Video6}/>
        </div>
    )
}
  
  const Video1 = {
    url: video1,
    id: "video1"
  }
  
  const Video2 = {
    url: video2,
    id: "video2"
  }
  
  const Video3 = {
    url: video3,
    id: "video3"
  }
  
  const Video4 = {
    url: video4,
    id: "video4"
  }
  
  const Video5 = {
    url: video5,
    id: "video5"
  }
  
  const Video6 = {
    url: video6,
    id: "video6"
  }
  
export default VideoBuilder;  