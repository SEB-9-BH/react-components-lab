
import './WeatherForecast.css';

const WeatherForecast = ({ FC }) => {
  return (
    <div className="weather">
      <h2>{FC.day}</h2>
      <img src={FC.img} alt={FC.imgAlt} />
      <p><span>conditions: </span>{FC.conditions}</p>
      <p><span>time: </span>{FC.time}</p>
    </div>
  );
};

export default WeatherForecast;

