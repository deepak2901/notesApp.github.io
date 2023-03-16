import React, { useState } from 'react';
import "./Search.css"

const Search = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearch(text);
  };

  return (
    <div class="search-elm">
      <input className = "searchName"
        type="text"
        placeholder="Search notes..."
        value={searchText}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;