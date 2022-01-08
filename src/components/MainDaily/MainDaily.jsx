import React from 'react'
import cl from './MainDaily.module.scss'

const MainDaily = ({ weatherDataHourly = null, days }) => {
	const time = new Date(weatherDataHourly?.daily[1]?.dt * 1000)

	return (
		<div>
			{weatherDataHourly && (
				<div className={cl.wrapper}>
					<div className={cl.dayTitle}>
						<div className={cl.dayTitleName}>
							<p>day</p>
						</div>
						<div className={cl.dayTitleInfo}>
							<div className={cl.dayTitleInfoFeels}>
								<p>Feels like</p>
							</div>
							<div className={cl.dayTitleInfoHumitidy}>
								<p>Humidity</p>
							</div>
							<div className={cl.dayTitleInfoWind}>
								<p>Wind</p>
							</div>
							<div className={cl.dayTitleInfoTemp}>
								<p>Temperature</p>
							</div>
						</div>
					</div>
					<div className={cl.dayDescription}>
						<div className={cl.dayName}>{days[time?.getDay()]}</div>
						<div className={cl.dayInfo}>
							<div className={cl.dayInfoFeels}>
								<p>{weatherDataHourly?.daily[1].feels_like.day} C°</p>
							</div>
							<div className={cl.dayInfoHumitidy}>
								<p>{weatherDataHourly?.daily[1].humidity} %</p>
							</div>
							<div className={cl.dayInfoWind}>
								<p>{weatherDataHourly?.daily[1].wind_speed} k/h</p>
							</div>
							<div className={cl.dayInfoTemp}>
								<p>{weatherDataHourly?.daily[1].temp.day} C°</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default MainDaily
