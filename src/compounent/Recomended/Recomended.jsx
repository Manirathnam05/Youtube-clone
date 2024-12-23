import React, { useEffect, useState } from 'react';
import "./Recomended.css";
// import Thumbnail1 from "../../assets/thumbnail1.png";
// import Thumbnail2 from "../../assets/thumbnail2.png";
// import Thumbnail3 from "../../assets/thumbnail3.png";
// import Thumbnail4 from "../../assets/thumbnail4.png";
// import Thumbnail5 from "../../assets/thumbnail5.png";
// import Thumbnail6 from "../../assets/thumbnail6.png";
// import Thumbnail7 from "../../assets/thumbnail7.png";
// import Thumbnail8 from "../../assets/thumbnail8.png";
import { API_KEY,viewsCount } from '../../data';
import { Link } from 'react-router-dom';


const Recomended = ({categoryId}) => {
    const [recommenddata,setRecommenddata] = useState([]);

    const Fetchrecommended = async()=>{
        const R_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
        const data = await fetch(R_url);
        const anotherdata = await data.json();
        setRecommenddata(anotherdata.items)
    };

    useEffect(()=>{
        Fetchrecommended();
    },[])

  return (


    <div className='Recommended-container'>
        {recommenddata.map((item,index)=>{
            return (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='recommended-video' >
            <img src={item.snippet.thumbnails.medium.url}/>
            <div className='video-info'>
                <h4>{item.snippet.title}</h4>
                <p>{item.snippet.channelTitle}</p>
                <span>{viewsCount(item.statistics.viewCount)} Views</span>
            </div>
        </Link>

            )

        })}
        
    </div>
  )
}

export default Recomended;
