import './weatherForecast.css';
import WeatherIcon from './WeatherIcon.jsx';
import WeatherData from './WeatherData.jsx';

const WeatherForecast = ({day, img, imgAlt, conditions, time}) => {
  return (
<div className="weather">
  <WeatherData day = {day}/>
  <WeatherIcon img={img} imgAlt={imgAlt} />
  <WeatherData conditions={conditions} time={time} />
</div>
  );
}
export default WeatherForecast;