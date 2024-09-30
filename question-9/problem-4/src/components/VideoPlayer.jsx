import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) return null;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <iframe src={videoSrc} frameBorder="0" allowFullScreen title="Video player" />
      <h3>{video.snippet.title}</h3>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoPlayer;