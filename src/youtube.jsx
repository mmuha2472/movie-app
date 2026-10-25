import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(
    !API_KEY || !CHANNEL_ID
      ? 'Set VITE_YOUTUBE_API_KEY and VITE_YOUTUBE_CHANNEL_ID to load videos.'
      : '',
  );

  useEffect(() => {
    if (!API_KEY || !CHANNEL_ID) return;

    const controller = new AbortController();
    const params = new URLSearchParams({
      part: 'snippet',
      type: 'video',
      channelId: CHANNEL_ID,
      maxResults: '10',
      order: 'date',
      key: API_KEY,
    });

    async function loadVideos() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?${params}`,
          { signal: controller.signal },
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error?.message || 'Failed to load YouTube videos.');
        }

        setVideos(Array.isArray(data.items) ? data.items : []);
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message);
      }
    }

    loadVideos();
    return () => controller.abort();
  }, []);

  if (error) return <p role="alert">{error}</p>;

  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id.videoId}>
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            {video.snippet.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Youtube;
