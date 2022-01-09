import React from 'react'
import cl from './Now.module.scss'

const Now = ({ weatherDataHourly = null, units }) => {
	return (
		<>
			{weatherDataHourly && (
				<div className={cl.nowWrapper}>
					<div>
						<p className={cl.nowTitle}>Сейчас</p>
					</div>
					<div>
						<div className={cl.infoBlocks}>
							<div>
								<p>Ощущается как</p>
								<p className={cl.bold}>
									{weatherDataHourly.current.feels_like}{' '}
									{units === 'metric' ? 'C' : 'F'}°
								</p>
							</div>
							<div>
								<p>Влажность</p>
								<p className={cl.bold}>{weatherDataHourly.current.humidity}%</p>
							</div>
							<div>
								<p>Скорость ветра</p>
								<p className={cl.bold}>
									{weatherDataHourly.current.wind_speed} к/ч
								</p>
							</div>
							<div>
								<p>Видимость</p>
								<p className={cl.bold}>
									{weatherDataHourly.current.visibility / 1000} км
								</p>
							</div>
							<div>
								<p>Давление</p>
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
