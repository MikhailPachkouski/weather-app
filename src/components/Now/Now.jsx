import React from 'react'
import cl from './Now.module.scss'

const Now = ({ weatherDataHourly = null }) => {
	return (
		<>
			{weatherDataHourly && (
				<div className={cl.nowWrapper}>
					<div>
						<p className={cl.nowTitle}>Now</p>
					</div>
					<div>
						<div className={cl.infoBlocks}>
							<div>
								<p>Feels like</p>
								<p className={cl.bold}>
									{weatherDataHourly.current.feels_like} C°
								</p>
							</div>
							<div>
								<p>Humidity</p>
								<p className={cl.bold}>{weatherDataHourly.current.humidity}%</p>
							</div>
							<div>
								<p>Wind Speed</p>
								<p className={cl.bold}>
									{weatherDataHourly.current.wind_speed} k/h
								</p>
							</div>
							<div>
								<p>Visiblity</p>
								<p className={cl.bold}>
									{weatherDataHourly.current.visibility / 1000} km
								</p>
							</div>
							<div>
								<p>Pressure</p>
								<p className={cl.bold}>
									{weatherDataHourly.current.pressure} hPa
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Now
