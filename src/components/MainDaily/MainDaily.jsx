import React from 'react'
import cl from './MainDaily.module.scss'

const MainDaily = ({ weatherDataHourly = null, days, units }) => {
	const time = new Date(weatherDataHourly?.daily[1]?.dt * 1000)

	return (
		<div>
			{weatherDataHourly && (
				<div className={cl.wrapper}>
					<div className={cl.dayTitle}>
						<div className={cl.dayTitleName}>
							<p>День</p>
						</div>
						<div className={cl.dayTitleInfo}>
							<div className={cl.dayTitleInfoFeels}>
								<p>Ощущается как</p>
							</div>
							<div className={cl.dayTitleInfoHumitidy}>
								<p>Влажность</p>
							</div>
							<div className={cl.dayTitleInfoWind}>
								<p>Ветер</p>
							</div>
							<div className={cl.dayTitleInfoTemp}>
								<p>Температура</p>
							</div>
						</div>
					</div>
					<div className={cl.dayDescription}>
						<div className={cl.dayName}>{days[time?.getDay()]}</div>
						<div className={cl.dayInfo}>
							<div className={cl.dayInfoFeels}>
								<p className={cl.dayValue}>
									{weatherDataHourly?.daily[1].feels_like.day}{' '}
									{units === 'metric' ? 'C' : 'F'}°
								</p>
							</div>
							<div className={cl.dayInfoHumitidy}>
								<p>{weatherDataHourly?.daily[1].humidity} %</p>
							</div>
							<div className={cl.dayInfoWind}>
								<p>{weatherDataHourly?.daily[1].wind_speed} k/h</p>
							</div>
							<div className={cl.dayInfoTemp}>
								<p>
									{weatherDataHourly?.daily[1].temp.day}{' '}
									{units === 'metric' ? 'C' : 'F'}°
								</p>
							</div>
						</div>
					</div>
					<div className={cl.dayDescription}>
						<div className={cl.dayName}>{days[time?.getDay() + 1]}</div>
						<div className={cl.dayInfo}>
							<div className={cl.dayInfoFeels}>
								<p className={cl.dayValue}>
									{weatherDataHourly?.daily[2].feels_like.day}{' '}
									{units === 'metric' ? 'C' : 'F'}°
								</p>
							</div>
							<div className={cl.dayInfoHumitidy}>
								<p>{weatherDataHourly?.daily[2].humidity} %</p>
							</div>
							<div className={cl.dayInfoWind}>
								<p>{weatherDataHourly?.daily[2].wind_speed} k/h</p>
							</div>
							<div className={cl.dayInfoTemp}>
								<p>
									{weatherDataHourly?.daily[2].temp.day}{' '}
									{units === 'metric' ? 'C' : 'F'}°
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default MainDaily
