import PropTypes from "prop-types";
import "./CurrentWeather.css";

export default function CurrentWeather({ data, location }) {
  return (
    <div className="current-weather">
      <h2>Today&apos;s Weather</h2>
      <p className="location">
        Location: <span>{location}</span>
      </p>
      <p>{data.date}</p>
      <p className="temp">Temperature: {data.temperature}°C</p>
      <p>
        Description: <span className="description">{data.description}</span>
      </p>
      <p>
        Humidity: <span>{data.humidity}%</span>
      </p>
      <p>
        Wind Speed: <span>{data.windSpeed} km/h</span>
      </p>
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
  location: PropTypes.string.isRequired,
};
