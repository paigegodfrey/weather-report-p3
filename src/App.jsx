import { useState, useEffect } from 'react';
import './App.css'
import SearchForm from './SearchForm'
import Forecast from './Forecast'

function App() {
  const [city, setCity] = useState('New York')
  const [weatherData, setWeatherData] = useState(null);


  // save your API key in .env folder
  // do NOT commit .env folder to git (include in .gitignore file)
  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`)
    const data = await response.json()
    setWeatherData(data)
  };

  useEffect(() => {
    console.log("weatherData inside useEffect", weatherData);
    fetchData();
  }, [city]);

  console.log("weatherData outside useEffect", weatherData);

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="App">
      <h1>Weather Report</h1>
      <SearchForm onCityChange={handleCityChange} />
      <Forecast city={city} data={weatherData} />
    </div>
  );
}

export default App;
