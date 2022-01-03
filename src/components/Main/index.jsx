import React from "react";
import MainCurrent from "../MainCurrent/MainCurrent";
import MainHourly from "../MainHourly/MainHourly";
import cl from "./Main.module.scss";

const Main = ({ weatherData = null, weatherDataHourly = null, units, date, days }) => {
  return (
    <div className={cl.mainWrapper}>
      <MainCurrent weatherData={weatherData} units={units} date={date} days={days}/>
      {/* <MainHourly weatherDataHourly={weatherDataHourly} units={units} date={date}/> */}
      <MainHourly weatherData={weatherData} units={units} date={date}/>
      <MainHourly weatherData={weatherData} units={units} date={date}/>
      <MainHourly weatherData={weatherData} units={units} date={date}/>
    </div>
  );
};

export default Main;
