import React, { useState } from 'react';
import './App.css';

const SearchBar = ({ onSearch, onClear }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim() === '') {
      onClear();
    } else {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onClear();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search employees by name, designation, or department..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      {searchTerm && (
        <button onClick={handleClear} className="search-clear">
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar; 