import React, { useState } from "react";
import cl from './Search.module.scss'

const appId = '7628ffc9153adeb88ae859e5b77eaca5'
const unitSystem = "metric"
const lang = "ru"

const Search = ({setWeatherData}) => {
  const [city, setcity] = useState("");

  const fetchWeather = (city) => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${unitSystem}&lang=${lang}`, requestOptions)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.log('error', error));

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setWeatherData(await fetchWeather(event.target[0].value));
    event.target[0].value = ''
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" className={cl.search__input}/>
        <button type="submit"  className={cl.search__button}><img src="/img/search_logo.svg" alt="search"/></button>
      </form>
    </div>
  );
};

export default Search;
