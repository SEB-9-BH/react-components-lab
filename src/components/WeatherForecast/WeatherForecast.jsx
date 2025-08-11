// Make sure the components is within the src

// Import the WeatherForecast.css, this is what makes up the table neat and centered
import './WeatherForecast.css'

// Define the WeatherList object
const WeatherList = ({day, img, imgAlt, conditions, time}) => {
    return (
        <div className="weather">
            <h2>{day}</h2>
            <img src={img} alt={imgAlt} />
            <p><span>conditions: {conditions} </span></p>
            <p><span>time: {time}</span></p>
        </div>
  );
};

// Exports the weatherList to the app.jsx
export default WeatherList;