import React from 'react'
import './App.css'
import SearchForm from './SearchForm'
import Forecast from './Forecast'
import data from './data/data'

function App() {

  return (
    <div className="App">
      <h1>Weather Report</h1>
      <SearchForm />
      <Forecast data={data} />
    </div>
  );
}

export default App
