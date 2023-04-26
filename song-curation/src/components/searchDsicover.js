import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      axios.get(`https://example.com/api/search?q=${searchQuery}`)
        .then(response => {
          setSearchResults(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h2>Search</h2>
      <input type="text" placeholder="Search for songs, artists, or albums" onChange={handleSearchInputChange} />
      {searchResults.map(result => (
        <div key={result.id}>
          <p>{result.title}</p>
          <p>{result.artist}</p>
          <button>Add to playlist</button>
        </div>
      ))}
    </div>
  );
}

export default Search;
