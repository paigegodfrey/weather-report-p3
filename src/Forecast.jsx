import React from 'react'
import Day from './Day'
import './Forecast.css'

import { parseForecastData } from './utils/utils'

function Forecast({ data }) {

  const parsedData = parseForecastData(data);

  return (
    <div className="forecast-container">
      {parsedData.map(day => (
        <div className="forecast-card" key={day.date}>
          <Day date={day.date} temperature={day.temperature} weather={day.weather} icon={day.icon} />
        </div>
      ))}
    </div>
  );
}

export default Forecast

