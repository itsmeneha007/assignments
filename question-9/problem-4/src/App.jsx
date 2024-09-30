import React, { useState } from 'react';
import { useYouTubeAPI } from './hooks/useYouTubeAPI';
import { useAuth } from './hooks/useAuth';
import { useFormHandler } from './hooks/useFormHandler';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import PlaylistManager from './components/PlaylistManager';
import VideoDetails from './components/VideoDetails';

const App = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const { formData, handleChange } = useFormHandler({ query: '' });
  const { videos, loading, error } = useYouTubeAPI(formData.query);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      <h1>YouTube Video Search App</h1>
      <SearchBar query={formData.query} onChange={handleChange} />
      {loading && <p>Loading...</p>}
      {error && <p>Error fetching videos</p>}
      {!loading && !error && <VideoList videos={videos} onVideoSelect={handleVideoSelect} />}
      {selectedVideo && <VideoPlayer video={selectedVideo} />}
      {isAuthenticated ? (
        <>
          <button onClick={logout}>Logout</button>
          <PlaylistManager />
        </>
      ) : (
        <button onClick={() => login({ name: 'User' })}>Login</button>
      )}
    </div>
  );
};

export default App;