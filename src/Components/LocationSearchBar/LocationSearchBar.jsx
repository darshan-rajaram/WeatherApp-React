import { useState } from "react";
import "./LocationSearchBar.css";
import PropTypes from "prop-types";

export default function LocationSearchBar({ onSearch }) {
  const [location, setLocation] = useState("");

  function isValidInput(input) {
    return /^[a-zA-Z0-9]+(?: [a-zA-Z0-9]+)*$/.test(input.trim());
  }
  function handleInputChange(e) {
    setLocation(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSearch(location.trim());
  }
  return (
    <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name..."
          value={location}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="search-button"
          disabled={!isValidInput(location)}
        >
          Search
        </button>
      </form>
    </div>
  );
}
LocationSearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
