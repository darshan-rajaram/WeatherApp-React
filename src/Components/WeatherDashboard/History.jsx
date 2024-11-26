import PropTypes from "prop-types";
import "./History.css";
export default function History({ data }) {
  return (
    <div className="history">
      <h2>Past 7 Days Weather History</h2>
      <div className="history-cards">
        {data.map((day, index) => (
          <div className="history-card" key={index}>
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
History.propTypes = {
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
