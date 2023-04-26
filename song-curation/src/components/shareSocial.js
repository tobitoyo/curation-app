import React from 'react';
import axios from 'axios';

function SharePlaylist({ playlistId }) {
  const handleShare = async () => {
    try {
      const response = await axios.post(`https://api.music.com/playlists/${playlistId}/share`);
      console.log(`Shared playlist with id ${playlistId} on ${response.data.platform}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleShare}>Share Playlist</button>
    </div>
  );
}
