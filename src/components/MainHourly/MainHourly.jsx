import React from 'react'
import cl from './MainHourly.module.scss'

const MainHourly = ({
	weatherData = null,
	weatherDataHourly = null,
	units,
	h,
}) => {
	const time = new Date(weatherDataHourly?.hourly[h]?.dt * 1000)
	const weatherH = weatherDataHourly?.hourly[h]

	return (
		<div className={cl.wrapper}>
			{weatherData && (
				<div>
					<h3>
						{time?.getHours()}:0{time?.getMinutes()}
					</h3>
					<div>
						<img
							src={`http://openweathermap.org/img/wn/${weatherH?.weather[0].icon}@2x.png`}
							alt=''
						/>
					</div>
					<h3>
						{weatherH?.temp} {units === 'metric' ? 'C' : 'F'}°
					</h3>

					{/* <h3>{weatherDataHourly?.hourly[0].dt.getHours()}:{weatherDataHourly?.hourly[0].dt.getMinutes()}</h3>
          <div><img src={`http://openweathermap.org/img/wn/${weatherDataHourly?.hourly[0].weather[0].icon}@2x.png`} alt="" /></div>
          <h3>{weatherDataHourly?.hourly[0].temp} {units === "metric" ? "C" : "F"}°</h3> */}
				</div>
			)}
		</div>
	)
}

export default MainHourly
