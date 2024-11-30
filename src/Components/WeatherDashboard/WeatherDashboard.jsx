import { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather.jsx";
import LocationSearchBar from "../LocationSearchBar/LocationSearchBar.jsx";
import Forecast from "./Forecast.jsx";
import History from "./History.jsx";
import getToken from "../../Util/TokenGen.js";
import {
  fetchCurrentWeather,
  fetchForecast,
  fetchHistory,
} from "../../Util/WeatherAPI.js";
import "./WeatherDashboard.css";

export default function WeatherDashboard() {
  const [location, setLocation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [token, setToken] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [history, setHistory] = useState(null);

  function handleSearch(input) {
    setLocation(input);
    setIsSubmitted(true);
  }

  useEffect(() => {
    const fetchToken = async () => {
      try {
        console.log("Fetching token...");
        await getToken(setToken);
        console.log("Token fetched successfully:", token);
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    console.log("isSubmitted:", isSubmitted);
    console.log("token:", token);
    console.log("location:", location);
    if (isSubmitted && token) {
      console.log("Token is available, fetching weather data...");
      fetchWeatherData(location, token);
    } else if (!token) {
      console.log("Token is not yet available.");
    }
  }, [isSubmitted, token, location]);

  const fetchWeatherData = async (location, token) => {
    try {
      console.log("Fetching weather data for location:", location);
      await fetchCurrentWeather(location, token, setCurrentWeather);
      await fetchForecast(location, token, setForecast);
      await fetchHistory(location, token, setHistory);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="weather-dashboard">
      <div
        className={`search-container ${
          isSubmitted ? "search-top" : "search-center"
        }`}
      >
        <LocationSearchBar onSearch={handleSearch} />
      </div>

      {isSubmitted && token ? (
        currentWeather && forecast && history ? (
          <div className="weather-content">
            <CurrentWeather data={currentWeather} location={location} />
            <div className="forecast-history">
              <History data={history} />
              <Forecast data={forecast} />
            </div>
          </div>
        ) : (
          <div className="loader"></div>
        )
      ) : (
        <div>Please submit a location to see the weather data.</div>
      )}
    </div>
  );
}
