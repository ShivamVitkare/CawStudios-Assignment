import React from "react";
import "./SearchBar.css";

import { FiPrinter, FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="searchbar-div">
      <div className="search-div">
        <input type="search" placeholder="Search..." />
        <span>
          <FiSearch />
        </span>
      </div>
      <div className="btn-div">
        <button>Add Item</button>
        <span>
          <FiPrinter />
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
