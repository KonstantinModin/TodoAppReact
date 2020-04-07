import React from "react";
import "./search-panel.css";

const SearchPanel = ({ onSearchChange, term }) => (
    <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={term}
        onChange={onSearchChange}
    />
);

export default SearchPanel;
