import React from 'react'
import MainCurrent from '../MainCurrent/MainCurrent'
import MainHourly from '../MainHourly/MainHourly'
import cl from './Main.module.scss'

const Main = ({
	weatherData = null,
	weatherDataHourly = null,
	units,
	date,
	days,
}) => {
	return (
		<div className={cl.mainWrapper}>
			<div>
				<MainCurrent
					weatherData={weatherData}
					units={units}
					date={date}
					days={days}
				/>
			</div>

			<div className={cl.hourlyWrapper}>
				<div className={cl.hourlyItem}>
					<MainHourly
						weatherData={weatherData}
						weatherDataHourly={weatherDataHourly}
						units={units}
						h={0}
					/>
					<MainHourly
						weatherData={weatherData}
						weatherDataHourly={weatherDataHourly}
						units={units}
						h={1}
					/>
				</div>
				<div className={cl.hourlyItem}>
					<MainHourly
						weatherData={weatherData}
						weatherDataHourly={weatherDataHourly}
						units={units}
						h={2}
					/>
					<MainHourly
						weatherData={weatherData}
						weatherDataHourly={weatherDataHourly}
						units={units}
						h={3}
					/>
				</div>
			</div>
		</div>
	)
}

export default Main
