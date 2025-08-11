import './App.css'

import weatherForecasts from './assets/components/WeatherForecast/WeatherForecast';

const App= () => {
const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

  return (
  <>
    <h1>Local Weather</h1>
    <section>


<div className="weather">
  <h2>Mon</h2>
  <img src="https://raw.githubusercontent.com/SEB-9-BH/react-components-lab/26f3e942e16b7a72ecb7f9267e9236cef4302a00/assets/day.svg" alt="sunny" />
  <p><span>conditions: </span>sunny</p>
  <p><span>time: </span>Morning</p>
</div>


<div className="weather">
  <h2>Tue</h2>
  <img src="https://raw.githubusercontent.com/SEB-9-BH/react-components-lab/26f3e942e16b7a72ecb7f9267e9236cef4302a00/assets/night.svg" alt="night" />
  <p><span>conditions: </span>clear</p>
  <p><span>time: </span>Night</p>
</div>


<div className="weather">
  <h2>Wed</h2>
  <img src="https://raw.githubusercontent.com/SEB-9-BH/react-components-lab/26f3e942e16b7a72ecb7f9267e9236cef4302a00/assets/stormy.svg" alt="stormy" />
  <p><span>conditions: </span>stormy</p>
  <p><span>time: </span>All Day</p>
</div>


<div className="weather">
  <h2>Thu</h2>
  <img src="https://raw.githubusercontent.com/SEB-9-BH/react-components-lab/26f3e942e16b7a72ecb7f9267e9236cef4302a00/assets/cloudy-day.svg" alt="cloudy" />
  <p><span>conditions: </span>overcast</p>
  <p><span>time: </span>Evening</p>
</div>


<div className="weather">
  <h2>Fri</h2>
  <img src="https://raw.githubusercontent.com/SEB-9-BH/react-components-lab/26f3e942e16b7a72ecb7f9267e9236cef4302a00/assets/cloudy-night.svg" alt="cloudy night" />
  <p><span>conditions: </span>cloudy</p>
  <p><span>time: </span>Night</p>
</div>


    </section>
  </>
  )
}

export default App
