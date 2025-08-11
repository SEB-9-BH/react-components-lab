import './WeatherForecast.css'

const WeatherForecast = ({day,img,imgAlt,time,condition}) => {
    return(
        <div className="weather">
  <h2>{day}</h2>
  <img src={img} alt={imgAlt} />
  <p><span>conditions: </span>{condition}</p>
  <p><span>time: </span>{time}</p>
</div>
    )
}
export default WeatherForecast;