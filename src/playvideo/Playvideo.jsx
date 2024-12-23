import React, { useEffect, useState } from 'react';
import "./Playvideo.css";
import Like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import { API_KEY, viewsCount } from "../data.js";
import moment from 'moment';

const Playvideo = ({ videoId }) => {

  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchIndividualVideo = async () => {
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
    const response = await fetch(videoUrl);
    const data = await response.json();
    setVideoData(data.items?.[0]);
  };

  const fetchChannelAndComments = async () => {
    if (!videoData) return;

    const channelUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${videoData.snippet.channelId}&key=${API_KEY}`;
    const channelResponse = await fetch(channelUrl);
    const channelData = await channelResponse.json();
    setChannelData(channelData.items?.[0]);

    const commentsUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    const commentResponse = await fetch(commentsUrl);
    const commentData = await commentResponse.json();
    setCommentData(commentData.items || []);
  };

  useEffect(() => {
    fetchIndividualVideo();
  }, [videoId]);

  useEffect(() => {
    fetchChannelAndComments();
  }, [videoData]);

  return (
    <div className='play-cointainer'>
      <iframe 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen className='playvideo-display'
      />

      <h3>{videoData?.snippet?.title || "Title here"}</h3>

      <div className='playvideo_info'>
        <p>
          {videoData ? viewsCount(videoData.statistics.viewCount) : "20k"} views &bull; {moment(videoData?.snippet?.publishedAt).fromNow()}
        </p>
        <div className='playvideo_share'>
          <span><img src={Like} alt="like" /> {videoData ? viewsCount(videoData.statistics.likeCount) : "600"}</span>
          <span><img src={dislike} alt="dislike" /></span>
          <span><img src={share} alt="share" /> Share</span>
          <span><img src={save} alt="save" /> Save</span>
        </div>
      </div>

      <hr />

      <div className='publisher'>
        <img src={channelData?.snippet?.thumbnails?.default?.url || ""} alt="channel-thumbnail" />
        <div>
          <h3>{videoData?.snippet?.channelTitle || ""}</h3>
          <p>{channelData ? viewsCount(channelData.statistics.subscriberCount) : "1M"} Subscribers</p>
        </div>
        <button className='subcribe'>Subscribe</button>
      </div>

      <div className='video-publisher'>
        <p>{videoData?.snippet?.description?.slice(0, 300) || "Video description"}</p>
      </div>

      <hr />

      <div className='comments'>
        <h4>{videoData ? viewsCount(videoData.statistics.commentCount) : "100"} Comments</h4>
        {commentData.map((item) => (
          <div className='comment-div' key={item.id}>
            <img src={item.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || ""} className='profile-comment' alt="profile" />
            <div className='comments-inbox'>
              <h3>
                {item.snippet?.topLevelComment?.snippet?.authorDisplayName || "Anonymous"} 
                <span>{moment(item.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}</span>
              </h3>
              <p>{item.snippet?.topLevelComment?.snippet?.textDisplay || "Comment text"}</p>
              <div className='comment-action'>
                <img src={Like} alt="like" />
                <span>{viewsCount(item.snippet?.topLevelComment?.snippet?.likeCount || 0)}</span>
                <img src={dislike} alt="dislike" className='disllike' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playvideo;
