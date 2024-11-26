import { useState } from "react";
import CurrentWeather from "./CurrentWeather.jsx";
import LocationSearchBar from "../LocationSearchBar/LocationSearchBar.jsx";
import Forecast from "./Forecast.jsx";
import History from "./History.jsx";
import {
  currentWeatherData,
  forecastData,
  historyData,
} from "../../Data/MockData.js";
import "./WeatherDashboard.css";

export default function WeatherDashboard() {
  const [location, setLocation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  function handleSearch(input) {
    setLocation(input);
    setIsSubmitted(true);
  }
  return (
    <div className="weather-dashboard">
      {/* Search Bar Section */}
      <div
        className={`search-container ${
          isSubmitted ? "search-top" : "search-center"
        }`}
      >
        <LocationSearchBar onSearch={handleSearch} />
      </div>

      {/* Weather Data Components */}
      {isSubmitted && (
        <div className="weather-content">
          <CurrentWeather data={currentWeatherData} />
          <div className="forecast-history">
            <History data={historyData} />
            <Forecast data={forecastData} />
          </div>
        </div>
      )}
    </div>
  );
}
