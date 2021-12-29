import './App.scss';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';

function App() {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    console.log(weatherData);
     
 }, [weatherData])

  return (
    <div className="App">
      <Header setWeatherData={setWeatherData}/>
      <Main weatherData={weatherData}/>
    </div>
  );
}

export default App;
