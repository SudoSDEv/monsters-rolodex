import React from "react";
import SearchBarStyles from "./search-bar.module.css";

const searchBar = ({placeholder, handleChange}) => {
  return (
    <div className={SearchBarStyles.searchBar}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default searchBar;
