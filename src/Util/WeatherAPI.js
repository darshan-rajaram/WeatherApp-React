// WeatherAPI.js

export const fetchCurrentWeather = async (
  location,
  token,
  setCurrentWeather
) => {
  try {
    console.log("Fetching current weather for location:", location);
    const response = await fetch(
      `http://localhost:5146/api/WeatherApp/current?location=${location}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!response.ok) throw new Error("Failed to fetch current weather");
    const data = await response.json();
    console.log("Current weather data fetched:", data);
    setCurrentWeather(data);
  } catch (error) {
    console.error("Error fetching current weather:", error);
  }
};

export const fetchForecast = async (location, token, setForecast) => {
  try {
    console.log("Fetching forecast for location:", location);
    const response = await fetch(
      `http://localhost:5146/api/WeatherApp/forecast7days?location=${location}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!response.ok) throw new Error("Failed to fetch forecast");
    const data = await response.json();
    console.log("Forecast data fetched:", data);
    setForecast(data);
  } catch (error) {
    console.error("Error fetching forecast:", error);
  }
};

export const fetchHistory = async (location, token, setHistory) => {
  try {
    console.log("Fetching history for location:", location);
    const response = await fetch(
      `http://localhost:5146/api/WeatherApp/past7days?location=${location}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    if (!response.ok) throw new Error("Failed to fetch history");
    const data = await response.json();
    console.log("History data fetched:", data);
    setHistory(data);
  } catch (error) {
    console.error("Error fetching history:", error);
  }
};
