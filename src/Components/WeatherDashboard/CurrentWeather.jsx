import PropTypes from "prop-types";
import "./CurrentWeather.css";
export default function CurrentWeather({ data }) {
  return (
    <div className="current-weather">
      <h2>Today&apos;s Weather</h2>
      <p>{data.date}</p>
      <p>Temperature: {data.temperature}°C</p>
      <p>Description: {data.description}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
    </div>
  );
}
CurrentWeather.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    humidity: PropTypes.number,
    windSpeed: PropTypes.number,
  }).isRequired,
};
