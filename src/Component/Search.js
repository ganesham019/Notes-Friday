import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = ({ handleSearchNoteText }) => {
  return (
    <div className="search bg-dark text-white  p-2">
      <AiOutlineSearch className="search-icons ml-3 mr-2" size="1.2em" />
      <input
        type="text"
        className="Searcharea ml-auto bg-dark border-0"
        placeholder="Search here...."
        onChange={(event) => handleSearchNoteText(event.target.value)}
      />
    </div>
  );
};

export default Search;
