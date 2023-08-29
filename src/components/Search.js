import React from "react";

function Search({searchBar}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(event) => {searchBar(event)}}
      />
    </div>
  );
}

export default Search;
