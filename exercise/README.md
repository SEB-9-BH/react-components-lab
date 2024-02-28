# ![React Components Lab - Exercise](./assets/hero.png)

## Overview

In this lab, you'll build a weather forecast page that re-uses a single component to display multiple days' worth of weather forecasts.

### Component Hierarchy

You will be implementing the following component diagram in your app:

![App component with three children components](./assets/react-weather-hierarchy.png)

### Starting Code

For the forecast data, copy the following array into your `App.jsx` file:

```js
const weatherForecasts = [
  {
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
    conditions: 'sunny',
    time: 'day'
  },
  {
    img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
    conditions: 'clear',
    time: 'night'
  },
  {
    img:
      'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
    conditions: 'stormy',
    time: 'all day'
  },
  {
    img:
      'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
    conditions: 'overcast',
    time: 'day'
  },
  {
    img:
      'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
    conditions: 'its dark, can you really tell?',
    time: 'night'
  }
];
```

#### WeatherForecast HTML

Each instance of the WeatherForecast component will use the following HTML content:

```html
    <div class="weather">
      <img src="http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg" alt="">
      <p><span>conditions:</span> sunny</p>
      <p><span>time:</span> day</p>
    </div>
```

At the `App.jsx` level, add a `<section>` tag that will surround all of the WeatherForecast elements. We'll need it for the CSS.

#### WeatherForecast CSS

Create a `WeatherForecast.css` file and add the following style rules to it:

```css
section {
    display:flex;
}
  
section .weather {
   border: 1px solid #ccc;
   flex: 1;
   padding:10px;
   text-align:center;
}
  
.weather span {
    font-weight: bold;
}
```

Be sure to import this stylesheet at the top of your WeatherForecast component file!

## Main Objective

In this lab, you will create a new React app that displays a series of weather forecasts. You will create a WeatherForecast component that will be used to display each forecast.

## Bonus

React Components can almost always be broken down into even smaller, more modular components! Try creating the following additional Components:

WeatherIcon - contains only the img
WeatherData - contains both the conditionsand time

This version will have the following component tree:

![App component with three generations of children components](./assets/react-bonus-weather-hierarchy.png)
