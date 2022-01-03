import React from 'react'

const MainHourly = ({weatherData = null, units, date}) => {
  return (
    <div>
        { weatherData && 
          <div>
          <h3>{date?.getHours()}:{date?.getMinutes()}</h3>
          <div><img src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="" /></div>
          <h3>{weatherData?.main.temp} {units === "metric" ? "C" : "F"}°</h3>

          {/* <h3>{weatherDataHourly?.hourly[0].dt.getHours()}:{weatherDataHourly?.hourly[0].dt.getMinutes()}</h3>
          <div><img src={`http://openweathermap.org/img/wn/${weatherDataHourly?.hourly[0].weather[0].icon}@2x.png`} alt="" /></div>
          <h3>{weatherDataHourly?.hourly[0].temp} {units === "metric" ? "C" : "F"}°</h3> */}
          </div>
          
        
        }
    </div>
  )
}

export default MainHourly
