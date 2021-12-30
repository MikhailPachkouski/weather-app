import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import { useEffect, useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [units, setUnits] = useState("metric");
  const [date, setDate] = useState(null);

  const appId = "7628ffc9153adeb88ae859e5b77eaca5";
  const lang = "ru";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const updateWeatherData = async (city) => {
    setWeatherData(await fetchWeather(city));
  };

  const fetchWeather = (city) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}&lang=${lang}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    if (weatherData) {
      updateWeatherData(weatherData?.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [units]);

  useEffect(() => {
    if (weatherData) {
      setDate(new Date(weatherData?.dt * 1000));
      console.log(date);
      console.log(weatherData);
    }
  }, [weatherData]);

  return (
    <div className="App">
      <Header
        units={units}
        setUnits={setUnits}
        updateWeatherData={updateWeatherData}
      />
      <Main weatherData={weatherData} units={units} date={date} days={days}/>
    </div>
  );
}

export default App;
