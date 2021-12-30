import React from 'react'
import Search from '../Search'
import ToggleUnits from '../ToggleUnits'
import cl from './Header.module.scss'

const Header = ({units, setUnits, updateWeatherData}) => {
    return (
        <div className={cl.header__wrapper}>
            <img src="/img/logo.png" alt="Logo" />
            <Search updateWeatherData={updateWeatherData}/>
            <ToggleUnits units={units} setUnits={setUnits} updateWeatherData={updateWeatherData}/>
            {/* <button className={cl.header__button}>°C / °F</button> */}
        </div>
    )
}

export default Header
