import React from 'react'

const MainCurrent = ({weatherData = null, units, date, days}) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <h2>{weatherData?.name}</h2>
          <h3>{days[date?.getDay()]} {date?.getHours()}:{date?.getMinutes()}</h3>
          <h2>{weatherData?.main.temp} {units === "metric" ? "C" : "F"}°</h2>
          <h2>{weatherData?.weather[0].description}</h2>
          <p><img src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`} alt="" /></p>
        </div>
      ) : (
        <p style={{textAlign: "center"}}>Введите город</p>
      )}
    </div>
  )
}

export default MainCurrent
