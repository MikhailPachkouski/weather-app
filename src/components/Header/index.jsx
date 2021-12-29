import React from 'react'
import Search from '../Search'
import cl from './Header.module.scss'

const Header = ({setWeatherData}) => {
    return (
        <div className={cl.header__wrapper}>
            <img src="/img/logo.png" alt="Logo" />
            <Search setWeatherData={setWeatherData}/>
            <button className={cl.header__button}>°C / °F</button>
        </div>
    )
}

export default Header
