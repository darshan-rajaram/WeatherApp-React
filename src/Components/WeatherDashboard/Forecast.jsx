import PropTypes from "prop-types";
import "./Forecast.css";
export default function Forecast({ data }) {
  return (
    <div className="forecast">
      <h2>7-Day Weather Forecast</h2>
      <div className="forecast-cards">
        {data.map((day, index) => (
          <div className="forecast-card" key={index}>
            <p className="date">{day.date}</p>
            <p className="temp">{day.temperature}°C</p>
            <p className="description">{day.description}</p>
            <p>Humidity: {day.humidity}%</p>
            <p>Wind Speed: {day.windSpeed} km/h</p>
          </div>
        ))}
      </div>
    </div>
  );
}
Forecast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
      windSpeed: PropTypes.number.isRequired,
    })
  ).isRequired,
};
