
import { useState, useEffect } from 'react';
import axios from 'axios';

const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY';

export const useYouTubeAPI = (query, filters = {}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          q: query,
          part: 'snippet',
          maxResults: 10,
          key: YOUTUBE_API_KEY,
          ...filters,
        },
      });
      setVideos(response.data.items);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchVideos();
    }
  }, [query, filters]);

  return { videos, loading, error };
};