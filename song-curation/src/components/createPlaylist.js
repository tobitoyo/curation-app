import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Playlist() {
  const [playlistName, setPlaylistName] = useState('');
  const [playlistSongs, setPlaylistSongs] = useState([]);

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value);
  };

  const handleAddSongClick = (song) => {
    setPlaylistSongs([...playlistSongs, song]);
  };

  const handleRemoveSongClick = (song) => {
    setPlaylistSongs(playlistSongs.filter(item => item.id !== song.id));
  };

  const handleSavePlaylistClick = () => {
    axios.post('https://example.com/api/playlists', {
      name: playlistName,
      songs: playlistSongs.map(song => song.id),
    })
      .then(response => {
        console.log(response.data);
        setPlaylistName('');
        setPlaylistSongs([]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Create Playlist</h2>
      <input type="text" placeholder="Enter playlist name" value={playlistName} onChange={handlePlaylistNameChange} />
      {playlistSongs.map(song => (
        <div key={song.id}>
          <p>{song.title}</p>
          <p>{song.artist}</p>
          <button onClick={() => handleRemoveSongClick(song)}>Remove</button>
        </div>
      ))}
      <button onClick={handleSavePlaylistClick}>Save Playlist</button>
    </div>
  );
}

export default Playlist;
