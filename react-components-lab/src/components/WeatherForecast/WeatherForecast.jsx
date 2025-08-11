import './WeatherForecast.css'
const WeatherListItem = ({day, img, imgAlt, conditions, time}) => {
    return (
        <div className="weather">
            <h2>{day}</h2>
            <img src={img} alt={imgAlt} />
            <p><span>conditions: {conditions} </span></p>
            <p><span>time: {time}</span></p>
        </div>
  );
};

export default WeatherListItem;