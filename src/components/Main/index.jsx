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
			<MainCurrent
				weatherData={weatherData}
				units={units}
				date={date}
				days={days}
			/>
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
			<MainHourly
				weatherData={weatherData}
				weatherDataHourly={weatherDataHourly}
				units={units}
				h={2}
			/>
		</div>
	)
}

export default Main
