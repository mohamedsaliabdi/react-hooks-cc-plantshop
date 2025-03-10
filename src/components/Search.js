import React, { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  // Handle search input changes
  const handleSearchChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery); // Update local state with the query
    onSearch(newQuery); // Pass the query to the parent component
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query} // Bind input value to local state
        onChange={handleSearchChange} // Trigger search on input change
      />
    </div>
  );
}

export default Search;

