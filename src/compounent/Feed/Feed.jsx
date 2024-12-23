import React, { useEffect, useState } from 'react';
import "./Feed.css";
import { Link } from 'react-router-dom';
import {API_KEY,viewsCount} from "../../data.js";
import moment from 'moment';



const Feed = ({category}) => {

    const [data,setData] = useState([]);

    const FetchData = async ()=>{
        const videoList = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList).then(response => response.json()).then(data=>setData(data.items))
    };

    useEffect(()=>{
        FetchData();
    },[category])

    return (
        <div className='feed'>
            {data.map((item,index)=>{
                return (
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
                    <img src={item.snippet.thumbnails.medium.url} alt="Video Thumbnail" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{viewsCount(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>

                )
            })}
          
        </div>
    );
};

export default Feed;
