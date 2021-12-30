import React from "react";
import cl from "./Main.module.scss";

const Main = ({ weatherData = null, units, date, days }) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData?.name}</h2>
          <h3>{days[date?.getDay()]} {date?.getHours()}:{date?.getMinutes()}</h3>
          <h2>{weatherData?.main.temp} {units === "metric" ? "C" : "F"}°</h2>
          <h2>{weatherData?.weather[0].description}</h2>
        </div>
      ) : (
        <p>Введите город</p>
      )}
    </div>
  );
};

export default Main;
