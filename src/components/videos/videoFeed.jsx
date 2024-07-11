import React, { useEffect, useState } from "react";
import videoService from "../../services/videoYoutube.service";
const VideoFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const popularVideos = await videoService();
        setVideos(popularVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setVideos([]);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-container">
      <h2 className="title">Popular Videos</h2>
      <ul className="video-list">
        {videos.map((video, index) => (
          <li key={index} className="card">
            <div className="card-header">
              <i className="card-icon fas fa-video"></i>
              <h3 className="card-title">{video.snippet.title}</h3>
            </div>
            <div className="card-body">
              <img
                className="card-image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <p className="card-text">{video.snippet.description}</p>
              <a
                className="card-link"
                href={`https://www.youtube.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch video
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoFeed;
