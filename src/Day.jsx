import React from 'react'
import './Day.css'

function Day({ date, temperature, weather, icon }) {

  const temperatureClass = temperature < 60 ? "cold" : "hot";

  return (
    <div>
      <h2>{date}</h2>
      <img className="weather-icon" src={`http://openweathermap.org/img/wn/${icon}.png`} alt={weather} />
      <h2 className="weather-description">{weather}</h2>
      <p className={`temperature ${temperatureClass}`}>{temperature}°</p>
    </div>
  )
}

export default Day
