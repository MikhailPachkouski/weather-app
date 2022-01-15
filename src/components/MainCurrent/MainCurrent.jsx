import React from 'react'
import cl from './MainCurrent.module.scss'

const MainCurrent = ({ weatherData = null, units, date, days }) => {
	return (
		<div>
			{weatherData && (
				<div className={cl.mainCurrentWrapper}>
					<h2 className={cl.mainCurrentCity}>{weatherData?.name}</h2>
					<h3 className={cl.mainCurrentDate}>
						{days[date?.getDay()]} {date?.getHours()}:

						{~~(date?.getMinutes() / 10) < 1 ? '0' : ''}

						{date?.getMinutes()}
					</h3>
					<h2 className={cl.mainCurrentDescription}>
						{weatherData?.weather[0].description}
					</h2>
					<h2 className={cl.mainCurrentTemp}>
						{weatherData?.main.temp} {units === 'metric' ? 'C' : 'F'}°
					</h2>
					{/* <p>
						<img
							src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
							alt=''
						/>
					</p> */}
				</div>
			)}
		</div>
	)
}

export default MainCurrent
