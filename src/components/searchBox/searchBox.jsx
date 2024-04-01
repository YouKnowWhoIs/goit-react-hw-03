// import { useState } from "react";

export const SearchBox = ({ value, onChange }) => {
  return (
    <div className="search-box-conteiner">
      <p>Find contacts by name</p>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Search..."
        className="search-box-input"
      />
    </div>
  );
};
