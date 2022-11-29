import React from "react";

function SearchBar({keyword, keywordChange}) {
  return (
    <div className="search-bar ">
      <div className="searchInputs ">
        <input type="text" placeholder="Search..." 
        value={keyword} 
        onChange={(event) => {
          keywordChange(event.target.value)
        }}
        />
      </div>
    </div>
  );
}

export default SearchBar;