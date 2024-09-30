import React from 'react';

const SearchBar = ({ query, onChange }) => {
  return (
    <form>
      <input
        type="text"
        name="query"
        value={query}
        onChange={onChange}
        placeholder="Search for videos"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;