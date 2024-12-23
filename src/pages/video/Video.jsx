import React from 'react';
import "./Video.css";
import Playvideo from '../../playvideo/Playvideo';
import Recomended from '../../compounent/Recomended/Recomended';
import { useParams } from 'react-router-dom';
const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div className='video-cointainer'>
         <Playvideo videoId={videoId} />
         <Recomended categoryId={categoryId}/>
    </div>
  )
}

export default Video;
