import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import Now from './components/Now/Now'

function App() {
	const [weatherData, setWeatherData] = useState(null)
	const [weatherDataHourly, setWeatherDataHourly] = useState(null)
	const [units, setUnits] = useState('metric')
	const [date, setDate] = useState(null)
	const [lon, setLon] = useState(null)
	const [lat, setLat] = useState(null)

	const appId = '7628ffc9153adeb88ae859e5b77eaca5'
	const lang = 'ru'
	// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
	const days = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
	]

	const updateWeatherData = async city => {
		setWeatherData(await fetchWeather(city))
	}

	const fetchWeather = city => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow',
		}

		return fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}&units=${units}&lang=${lang}`,
			requestOptions
		)
			.then(response => response.json())
			.then(async result => {
				setWeatherDataHourly(
					await fetchWeatherHourly(result.coord.lon, result.coord.lat)
				)
				return result
			})
			.catch(error => console.log('error', error))
	}

	const fetchWeatherHourly = (lon, lat) => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow',
		}

		return fetch(
			`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,minutely&appid=${appId}&units=${units}&lang=${lang}`,
			requestOptions
		)
			.then(response => response.json())
			.then(result => result)
			.catch(error => console.log('error', error))
	}

	useEffect(() => {
		if (weatherData) {
			updateWeatherData(weatherData?.name)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [units])

	useEffect(() => {
		if (weatherData) {
			setDate(new Date(weatherData?.dt * 1000))
			// console.log(date);
			// updateLon();
			// updateLat();
			// updateWeatherDataHourly(lon, lat);
			console.log(weatherDataHourly)
			console.log(weatherData)
		}
	}, [weatherData])

	return (
		<div className='App'>
			<Header
				units={units}
				setUnits={setUnits}
				updateWeatherData={updateWeatherData}
			/>
			{!weatherData && (
				<div style={{ textAlign: 'center', marginTop: '20px' }}>
					Введите город
				</div>
			)}
			<Main
				weatherData={weatherData}
				weatherDataHourly={weatherDataHourly}
				units={units}
				date={date}
				days={days}
			/>
			<Now weatherDataHourly={weatherDataHourly} />
		</div>
	)
}

export default App
