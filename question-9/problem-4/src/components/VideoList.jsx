import React from 'react';

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div>
      {videos.map((video) => (
        <div key={video.id.videoId} onClick={() => onVideoSelect(video)}>
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
          <p>{video.snippet.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;